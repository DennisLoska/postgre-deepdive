import { Client } from "pg";
import {
    DateOrString,
    findUserByEmail,
    findUserByName,
    findUsersByBirthdate,
    findUsersByYearOfBirth,
    NumberOrString,
} from "./queries/user.queries";

async function getUserByName(user: string, client: Client) {
    const users = await findUserByName.run({ name: user }, client);
    console.log(`Found by name: ${users[0].name}`);
    return users;
}

async function getUserByEmail(email: string, client: Client) {
    const users = await findUserByEmail.run({ email }, client);
    console.log(`Found by email: ${users[0].name}`);
    return users;
}

async function getUsersByBirthdate(birthdate: DateOrString, client: Client) {
    return await findUsersByBirthdate.run({ birthdate }, client);
}

async function getUsersByYearOfBirth(year: NumberOrString, client: Client) {
    return findUsersByYearOfBirth.run({ year }, client);
}

export default {
    getUserByName,
    getUserByEmail,
    getUsersByBirthdate,
    getUsersByYearOfBirth,
};
