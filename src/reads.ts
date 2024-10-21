import { pool } from "./client";
import { AsyncQueue } from "./async_queue";
import { RandomReadQueryFactory } from "./random_read";
const queue = new AsyncQueue(3);
// import { tasks } from "./examples";

async function read() {
    try {
        await pool.connect();
        console.log("client connected");

        const results: unknown[] = [];
        let c = 1;
        while (c < 10) {
            const qF = new RandomReadQueryFactory();
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
