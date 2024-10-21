import { pool } from "./client";
import { AsyncQueue } from "./queue";
import user from "./queries/user";
const queue = new AsyncQueue(3);

async function read() {
    const p1 = () => user.getUsersByYearOfBirth(2000, pool);
    const p2 = () => user.getUserByName("John Smith", pool);
    const p3 = () => user.getUsersByYearOfBirth(1992, pool);
    const p4 = () => user.getUserByName("Griffin Green", pool);
    const p5 = () => user.getUsersByYearOfBirth(2005, pool);
    const p6 = () => user.getUserByName("Amalia Runte", pool);
    const tasks = [p1, p2, p3, p4, p5, p6];

    try {
        await pool.connect();
        console.log("client connected");

        let c = 1;
        for await (const task of tasks) {
            queue
                .run(task, c)
                .then((res) => {
                    console.log(`result for task ${res?.id}`);
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
