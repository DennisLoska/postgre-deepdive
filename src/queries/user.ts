import { Client } from "pg";
import { sql } from "@pgtyped/runtime";
import {
    DateOrString,
    findUserByEmail,
    findUserByName,
    findUsersByBirthdate,
    findUsersByYearOfBirth,
    NumberOrString,
} from "./sql/user.queries";

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
    return findUsersByBirthdate.run({ birthdate }, client);
}

async function getUsersByYearOfBirth(year: NumberOrString, client: Client) {
    return findUsersByYearOfBirth.run({ year }, client);
}

async function getUsersWithComments(minCount: number, client: Client) {
    const query = sql`
        SELECT users.id, comments.value
        FROM users
        INNER JOIN comments ON users.id = comments.user_id
        WHERE users.id IN (
            SELECT user_id
            FROM comments
            GROUP BY user_id
            HAVING COUNT(id) > $minCount
        );`;

    return query.run({ minCount }, client);
}

export default {
    getUserByName,
    getUserByEmail,
    getUsersByBirthdate,
    getUsersByYearOfBirth,
    getUsersWithComments,
};
