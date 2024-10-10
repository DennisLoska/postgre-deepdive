import fs from "fs";
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

async function main() {
    console.time();

    try {
        fs.unlinkSync("users.csv");
        fs.unlinkSync("comments.csv");
    } catch (error) {
        console.log(error.message);
    }

    console.log("Generating data...");
    const userFD = fs.openSync("users.csv", "a");
    const commentFD = fs.openSync("comments.csv", "a");

    // overkill DI I know, just wanted to make it generic
    const generator = csvGenerator(rndUser, LIMIT);

    let counter = 0;
    for (const item of generator) {
        if (counter % 100_000 === 0) {
            console.log(process.memoryUsage().rss);
        }

        fs.appendFileSync(userFD, item.row);

        // relation with user
        const comment = rndComment(BigInt(item.id), BigInt(random(1, LIMIT)));
        const commentRow = rowify(comment, item.id);
        fs.appendFileSync(commentFD, commentRow);
        counter++;
    }

    console.timeEnd();
}

main();
