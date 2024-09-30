import fs from "fs";
import { random } from "lodash";
import { rndComment, rndUser } from "./random";

// const LIMIT = 20_000_000;
const LIMIT = 1_000_000;

console.time();

function rowify<T extends object>(item: T, pos: number) {
    let row = "";

    const keys = Object.keys(item);

    if (pos === 1) {
        const header = keys.toString();
        row = row.concat(`${header}\n`);
    }

    for (let j = 0; j < keys.length; j++) {
        const col = item[keys[j]];
        if (col instanceof Date) row = row.concat(`${col.toISOString()},`);
        else row = row.concat(`${col},`);
    }

    return `${row}\n`;
}

type Func<T> = (id: bigint) => T;
function* csvGenerator<T extends object>(cb: Func<T>, limit: number) {
    for (let i = 1; i <= limit; i++) {
        const item = cb(BigInt(i));
        const itemRow = rowify(item, i);
        yield { row: itemRow, id: i };
    }
}

// overkill DI I know, just wanted to make it generic
const generator = csvGenerator(rndUser, LIMIT);

try {
    fs.unlinkSync("users.csv");
    fs.unlinkSync("comments.csv");
} catch (error) {
    console.log(error.message);
}

console.log("Generating data...");
for (const item of generator) {
    fs.appendFileSync("users.csv", item.row);

    // relation with user
    const comment = rndComment(BigInt(item.id), BigInt(random(1, LIMIT)));
    const commentRow = rowify(comment, item.id);
    fs.appendFileSync("comments.csv", commentRow);
}

console.timeEnd();
