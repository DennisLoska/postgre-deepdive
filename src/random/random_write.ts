// TODO: random write factory
import { pool } from "./client";
import { faker } from "@faker-js/faker";
import { rndComment } from "./random";
import { createComment } from "./queries/comment";

export class RandomWriteQueryFactory<T> {
    private queries: Array<() => Promise<T>> = [];
    private limit = 100_000_000;

    constructor(seed: number) {
        faker.seed(seed);
        const comment = rndComment(BigInt(42), BigInt(42));

        this.queries = [
            () =>
                createComment(
                    faker.helpers.rangeToNumber({ min: 1, max: this.limit }),
                    comment.value,
                    pool,
                ),
            // TODO: add more queries
        ];
    }

    create() {
        return faker.helpers.arrayElement(this.queries);
    }
}
