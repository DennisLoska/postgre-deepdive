import { client } from "./client";
import user from "./queries/user";

function size(item: unknown) {
    const str = JSON.stringify(item);
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    return bytes;
}

async function main() {
    await client.connect();
    console.time("executing query");

    try {
        const users = await user.getUsersByYearOfBirth(2000, client);
        console.log(users);
        console.log("content length: ", size(users).length);

        // const comments = await user.getUsersWithComments(9, client);
        // const comments = await user.getUsersWithCommentsFaster(9, client);
        // console.log(comments);
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
        console.timeEnd("executing query");
    }
}

main();
