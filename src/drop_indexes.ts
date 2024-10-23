import {
    dropCommentsIndexes,
    dropRolesIndexes,
    dropUsersIndexes,
} from "./queries";
import { client } from "./client";

async function dropIndexes() {
    await client.connect();
    const label = "dropping indexes:";
    console.time(label);

    try {
        await dropUsersIndexes(client);
        await dropRolesIndexes(client);
        await dropCommentsIndexes(client);
    } catch (error) {
        console.error(error);
    } finally {
        console.timeEnd(label);
        await client.end();
    }
}

dropIndexes();
