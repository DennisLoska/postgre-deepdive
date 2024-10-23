import { Client } from "pg";
import {
    createCommentsTimestampIndex,
    createCommentsUserCompositeIndex,
    createCommentsUserIndex,
    createRolesPrivilegeIndex,
    createRolesUserIndex,
    createUsersBirthdateIndex,
    createUsersEmailIndex,
    dropCommentsTimestampIndex,
    dropCommentsUserCompositeIndex,
    dropCommentsUserIndex,
    dropRolesPrivilegeIndex,
    dropRolesUserIndex,
    dropUsersBirthdateIndex,
    dropUsersEmailIndex,
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

export async function dropUsersIndexes(client: Client) {
    await dropUsersEmailIndex.run(undefined, client);
    await dropUsersBirthdateIndex.run(undefined, client);
}

export async function dropRolesIndexes(client: Client) {
    await dropRolesUserIndex.run(undefined, client);
    await dropRolesPrivilegeIndex.run(undefined, client);
}

export async function dropCommentsIndexes(client: Client) {
    await dropCommentsUserIndex.run(undefined, client);
    await dropCommentsTimestampIndex.run(undefined, client);
    await dropCommentsUserCompositeIndex.run(undefined, client);
}
