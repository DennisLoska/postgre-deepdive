import { pool } from "./client";
import { AsyncQueue } from "./async_queue";
import { RandomReadQueryFactory } from "./random_read";
import { taskRunner } from "./task_runner";

async function read() {
    const MAX_CONCURRENCY = 3;
    const TASK_COUNT = 5;

    const queue = new AsyncQueue(MAX_CONCURRENCY);

    try {
        await pool.connect();
        console.log("client connected");
        const results = taskRunner(RandomReadQueryFactory, queue, TASK_COUNT);
        console.log(results);
    } catch (error) {
        console.error(error);
    } finally {
        // NOTE: Would be nice, but does not work with the way I implemented the queue
        // pool.end();
    }
}

read();

// NOTE: The lib already does this so this is useless
// process.on("SIGINT", async () => {
//     await pool.end();
//     console.log("connection closed");
// });
