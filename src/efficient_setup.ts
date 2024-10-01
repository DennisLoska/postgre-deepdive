import fs from "fs";
import { random } from "lodash";
import { rndComment, rndUser } from "./random";
import { rowify } from "./row";

// const LIMIT = 20_000_000;
const LIMIT = 10_000_000;
// const LIMIT = 100_000;

function main() {
    console.time();

    try {
        fs.unlinkSync("users2.csv");
        fs.unlinkSync("comments2.csv");
    } catch (error) {
        console.log(error.message);
    }

    console.log("Generating data...");
    const userFD = fs.openSync("users2.csv", "a");
    const commentFD = fs.openSync("comments2.csv", "a");

    for (let i = 1; i <= LIMIT; i++) {
        const user = rndUser(BigInt(i));
        fs.appendFileSync(userFD, rowify(user, i));

        // relation with user
        const comment = rndComment(BigInt(i), BigInt(random(1, LIMIT)));
        fs.appendFileSync(commentFD, rowify(comment, i));
    }

    fs.closeSync(userFD);
    fs.closeSync(commentFD);

    console.timeEnd();
}

main();
