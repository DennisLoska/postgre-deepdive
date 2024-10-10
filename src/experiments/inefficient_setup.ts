import fs from "fs";
import { rndUser, User } from "../random";
import assert from "assert";

// Going OOM
// const LIMIT = 100_000_000;
// const LIMIT = 1_000_000;
const LIMIT = 5_000_000;

console.time();

const users: User[] = [];
for (let i = 0; i < LIMIT; i++) {
    if (i % 100_000 === 0) {
        console.log("memory usage: ", process.memoryUsage.rss());
    }
    users.push(rndUser(BigInt(i)));
}

function memoryInefficient__arrayToCSV(data: Comment[]);
function memoryInefficient__arrayToCSV(data: User[]);
function memoryInefficient__arrayToCSV(data: object[]) {
    assert(data.length > 0, "No data man!");
    const keys = Object.keys(data[0]);
    assert(keys.length > 0, "No keys!");
    let csv = keys.toString() + "\n";

    for (let i = 0; i < data.length; i++) {
        if (i % 100_000 === 0) {
            console.log("memory usage: ", process.memoryUsage.rss());
        }

        let row = "";
        for (let j = 0; j < keys.length; j++) {
            const col = data[i][keys[j]];
            if (col instanceof Date) row = row.concat(`${col.toISOString()},`);
            else row = row.concat(`${col},`);
        }
        csv = csv.concat(`${row}\n`);
    }
    return csv;
}

console.log("Generating data...");
const userCSV = memoryInefficient__arrayToCSV(users);
fs.writeFileSync("inefficient.csv", userCSV);

console.timeEnd();
