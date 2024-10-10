import fs, { WriteStream } from "fs";
import { random } from "lodash";
import { rndComment, rndUser } from "./random";
import { rowify } from "./row";

// const LIMIT = 20_000_000;
const LIMIT = 10_000_000;
// const LIMIT = 100_000;

type Func<T> = (id: bigint) => T;
function* csvGenerator<T extends object>(cb: Func<T>, limit: number) {
    for (let i = 1; i <= limit; i++) {
        yield { row: rowify(cb(BigInt(i)), i), id: i };
    }
}

function waitDrain(stream: WriteStream) {
    return new Promise((resolve) => {
        stream.once("drain", resolve);
    });
}

async function main() {
    console.time();
    console.log("Generating data...");

    const generator = csvGenerator(rndUser, LIMIT);
    const userWriter = fs.createWriteStream("users4.csv", { flags: "w" });
    const commentWriter = fs.createWriteStream("comments4.csv", { flags: "w" });

    let counter = 0;
    for (const item of generator) {
        if (counter % 100_000 === 0) {
            console.log(process.memoryUsage().rss);
        }

        const canContinueUser = userWriter.write(item.row);

        if (!canContinueUser) {
            await waitDrain(userWriter);
        }

        const comment = rndComment(BigInt(item.id), BigInt(random(1, LIMIT)));
        const commentRow = rowify(comment, item.id);
        const canContinueComment = commentWriter.write(commentRow);

        if (!canContinueComment) {
            await waitDrain(commentWriter);
        }

        counter++;
    }

    userWriter.end();
    commentWriter.end();

    console.timeEnd();
}

main();
