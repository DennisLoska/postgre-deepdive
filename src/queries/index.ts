import { Client } from "pg";
import {
    createCommentsTimestampIndex,
    createCommentsUserCompositeIndex,
    createCommentsUserIndex,
    createRolesPrivilegeIndex,
    createRolesUserIndex,
    createUsersBirthdateIndex,
    createUsersEmailIndex,
} from "../sql/index.queries";

export async function createUsersIndexes(client: Client) {
    await createUsersBirthdateIndex.run(undefined, client);
    await createUsersEmailIndex.run(undefined, client);
}

export async function createRolesIndexes(client: Client) {
    await createRolesUserIndex.run(undefined, client);
    await createRolesPrivilegeIndex.run(undefined, client);
}

export async function createCommentsIndexes(client: Client) {
    await createCommentsUserIndex.run(undefined, client);
    await createCommentsTimestampIndex.run(undefined, client);
    await createCommentsUserCompositeIndex.run(undefined, client);
}
