import { pool } from "./client";
import { faker } from "@faker-js/faker";
import user from "./queries/user";
import { rndUser } from "./random";

export class RandomReadQueryFactory<T> {
    private queries: Array<() => Promise<T[]>> = [];

    constructor(seed: number) {
        faker.seed(seed);
        const person = rndUser(BigInt(42));

        this.queries = [
            // () =>
            //     user.getUsersByYearOfBirth(
            //         faker.helpers.rangeToNumber({ min: 1950, max: 2006 }),
            //         pool,
            //     ),
            // () => user.getUsersByBirthdate(person.birthdate, pool),
            () => user.getUserByName(person.name, pool),
            () => user.getUserByEmail(person.email, pool),
            // () =>
            //     user.getUsersWithComments(
            //         faker.helpers.rangeToNumber({ min: 5, max: 20 }),
            //         pool,
            //     ),
        ];
    }

    create() {
        return faker.helpers.arrayElement(this.queries);
    }
}
