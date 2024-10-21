import { pool } from "./client";
import { AsyncQueue } from "./async_queue";
import { RandomReadQueryFactory } from "./random_read";

async function read() {
    const MAX_CONCURRENCY = 5;
    const TASK_COUNT = 1000;

    const queue = new AsyncQueue(MAX_CONCURRENCY);
    try {
        await pool.connect();
        console.log("client connected");
        console.time("read tasks");

        const results: unknown[] = [];
        let c = 1;
        while (c < TASK_COUNT) {
            const qF = new RandomReadQueryFactory(c);
            const task = qF.create();

            queue
                .run(task, c)
                .then((res) => {
                    console.log(`result for task ${res?.id}`);
                    results.push(res);
                    if (queue.pending === 0) {
                        console.log("all tasks done!");
                        console.log("results:");
                        console.log(results);
                        console.log("queue results:");
                        console.log(queue.results);
                        console.timeEnd("read tasks");
                        process.exit(0);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            c++;
        }
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
