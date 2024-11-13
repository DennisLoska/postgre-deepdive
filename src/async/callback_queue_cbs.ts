type Task = {
    task: (taskCb: (error: unknown, value: unknown) => void) => void;
    cb: (error: unknown, value: unknown) => void;
    id: number;
};

export class CallbackQueue {
    private MAX = 3;
    public pending = 0;
    private queue: Task[] = [];

    constructor(max: number) {
        this.MAX = max;
    }

    private run(t: Task) {
        const { task, cb, id } = t;
        task((error, value) => {
            this.pending--;
            console.log(`finished task: ${id}`);

            if (this.queue.length > 0) {
                console.log("\n");
                const next = this.queue.shift();
                if (next) {
                    console.log(`call next promise from queue: ${next?.id}`);
                    this.run(next);
                } else {
                    console.assert(false, "This should never happen.");
                }
            }

            if (error === null) cb(null, value);
            else cb(error, null);
        });
    }

    enqueue(
        t: (cb: (error: unknown, v: unknown) => void) => void,
        id: number,
        cb: (error: unknown, value: unknown) => void,
    ) {
        if (this.pending < this.MAX) {
            this.pending++;
            console.log(`pending: ${this.pending}`);
            console.log(`start task: ${id}`);
            this.run({ task: t, cb, id });
        } else {
            console.log("pushed to queue: ", id);
            this.queue.push({ task: t, cb, id });
        }
    }
}

const callbackQueue = new CallbackQueue(2);

function callbackTick(
    ms: number,
    value: unknown,
    cb: (error: unknown, value: unknown) => unknown,
) {
    setTimeout(() => {
        let computedValue: unknown;
        let error = null;

        try {
            // pretend some tasks gets executed here
            console.log("computing...");
            computedValue = `computed task ${value}`;
        } catch (err) {
            error = err;
        } finally {
            if (error === null) cb(null, computedValue);
            else cb(error, null);
        }
    }, ms);
}

const task =
    (ms: number, value: unknown) =>
    (cb: (error: unknown, v: unknown) => void) => {
        callbackTick(ms, value, (error, val) => {
            if (error === null) cb(null, val);
            else cb(error, null);
        });
    };

const t1 = task(3000, "t1");
const t2 = task(500, "t2");
const t3 = task(1000, "t3");
const t4 = task(2000, "t4");
const t5 = task(250, "t5");

// t1((error, value) => {
//     if (error === null) {
//         console.log("task result: ", value);
//     }
// });

const tasks = [t1, t2, t3, t4, t5];
const ids = [1, 2, 3, 4, 5];
console.log("Start queue...");
for (let i = 0; i < tasks.length; i++) {
    callbackQueue.enqueue(tasks[i], ids[i], (error, value) => {
        if (error === null) {
            console.log("callback result: ", value);
        } else console.log(error);
    });
}
