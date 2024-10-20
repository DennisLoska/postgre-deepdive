import { faker } from "@faker-js/faker";

faker.seed(42);

export type User = {
    id: bigint;
    name: string;
    email: string;
    birthdate: Date;
};

export type Comment = {
    id: bigint;
    user_id: bigint;
    value: string;
    timestamp: Date;
};

export type Role = {
    id: bigint;
    user_id: bigint;
    title: string;
    privilege: string;
};

export function rndUser(userId: bigint): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        id: userId,
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName, lastName }),
        birthdate: faker.date.birthdate({ mode: "age", min: 18, max: 100 }),
    };
}

export function rndComment(commentId: bigint, userId: bigint): Comment {
    return {
        id: commentId,
        user_id: userId,
        value: faker.hacker.phrase().replace(",", ""),
        timestamp: faker.date.recent(),
    };
}

const privileges = ["admin", "user", "manager", "guest"];

export function rndRole(roleId: bigint, userId: bigint): Role {
    return {
        id: roleId,
        user_id: userId,
        title: faker.person.jobTitle(),
        privilege: faker.helpers.arrayElement(privileges),
    };
}
