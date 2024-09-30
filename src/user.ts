import { Client } from "pg";
import { findUserByEmail, findUserByName } from "./queries/user.queries";

async function getUserByName(user: string, client: Client) {
    const users = await findUserByName.run({ name: user }, client);
    console.log(`Found by name: ${users[0].name}`);
}

async function getUserByEmail(email: string, client: Client) {
    const users = await findUserByEmail.run({ email: email }, client);
    console.log(`Found by email: ${users[0].name}`);
}

export default {
    getUserByName,
    getUserByEmail,
};
