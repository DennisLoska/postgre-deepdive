import { AsyncQueue } from "./async_queue";

const LIMIT = 1;
const queue = new AsyncQueue(LIMIT);

function task(value) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("value: ", value);
            console.log("\n");
            res(value);
        }, 5000);
    });
}

async function main() {
    console.time();
    const res1 = queue.run(() => task("m1"), 1);
    queue.run(() => task("m2"), 2);
    queue.run(() => task("m3"), 3);
    queue.run(() => task("m4"), 4);
    queue.run(() => task("m5"), 5);
    await res1;
    console.timeEnd();
    console.log("the end");
}

main();
