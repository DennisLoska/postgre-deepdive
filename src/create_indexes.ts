import {
    createCommentsIndexes,
    createRolesIndexes,
    createUsersIndexes,
} from "./queries";
import { client } from "./client";

async function applyIndexes() {
    await client.connect();
    const label = "creating indexes";
    console.time(label);

    try {
        await createUsersIndexes(client);
        await createRolesIndexes(client);
        await createCommentsIndexes(client);
    } catch (error) {
        console.error(error);
    } finally {
        console.timeEnd(label);
        await client.end();
    }
}

applyIndexes();
