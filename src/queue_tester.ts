import { AsyncQueue } from "./async_queue";

const queue = new AsyncQueue(3);

const t1 = () =>
    new Promise((res) =>
        setTimeout(() => {
            res(console.log("t1"));
        }, 1000),
    );
const t2 = () =>
    new Promise((res) =>
        setTimeout(() => {
            res(console.log("t1"));
        }, 4000),
    );
const t3 = () =>
    new Promise((res) =>
        setTimeout(() => {
            res(console.log("t1"));
        }, 2000),
    );
const t4 = () =>
    new Promise((res) =>
        setTimeout(() => {
            res(console.log("t1"));
        }, 3000),
    );
const t5 = () =>
    new Promise((res) =>
        setTimeout(() => {
            res(console.log("t1"));
        }, 2000),
    );

async function runner() {
    await queue.enqueue(t1, 1);
    await queue.enqueue(t2, 2);
    await queue.enqueue(t3, 3);
    await queue.enqueue(t4, 4);
    await queue.enqueue(t5, 5);
}

runner();
