import { AsyncQueue } from "./async_queue";

const LIMIT = 3;
const queue = new AsyncQueue(LIMIT);

function task(value) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("value: ", value);
            res(value);
        }, 2500);
    });
}

async function main() {
    console.time();
    const res1 = queue.enqueue(() => task("m1"), 1);
    queue.enqueue(() => task("m2"), 2);
    queue.enqueue(() => task("m3"), 3);
    queue.enqueue(() => task("m4"), 4);
    queue.enqueue(() => task("m5"), 5);
    queue.enqueue(() => task("m6"), 6);
    queue.enqueue(() => task("m7"), 7);
    queue.enqueue(() => task("m8"), 8);

    // res1.then((value) => {
    //     console.timeEnd();
    //     console.log("the end");
    //     console.log("final value", value);
    // });

    // same as above
    const value = await res1;
    console.timeEnd();
    console.log("the non-blocking end");
    console.log("final value", value);
}

main();
