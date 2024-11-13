type Task<T> = {
    task: () => Promise<T>;
    cb: (error: unknown, value: unknown) => void;
    id: number;
};

export class CallbackQueue<T> {
    private MAX = 3;
    public pending = 0;
    private queue: Task<T>[] = [];

    constructor(max: number) {
        this.MAX = max;
    }

    private run<T>(t: Task<T>) {
        const { task, cb, id } = t;
        // TODO: also refactor to be callback based
        task()
            .then(
                (value) => cb(null, value),
                (error) => cb(error, null),
            )
            .finally(() => {
                this.pending--;
                console.log(`finished task: ${id}`);
                if (this.queue.length > 0) {
                    console.log("\n");
                    const next = this.queue.shift();
                    if (next) {
                        console.log(
                            `call next promise from queue: ${next?.id}`,
                        );
                        this.run(next);
                    } else {
                        console.assert(false, "This should never happen.");
                    }
                }
            });
    }

    enqueue(
        p: () => Promise<T>,
        id: number,
        cb: (error: unknown, value: unknown) => void,
    ) {
        if (this.pending < this.MAX) {
            this.pending++;
            console.log(`pending: ${this.pending}`);
            console.log(`start task: ${id}`);
            this.run({ task: p, cb, id });
        } else {
            console.log("pushed to queue: ", id);
            this.queue.push({ task: p, cb, id });
        }
    }
}

const callbackQueue = new CallbackQueue(2);

function tick(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const t1 = () => tick(2000).then(() => "t1");
const t2 = () => tick(500).then(() => "t2");
const t3 = () => tick(1000).then(() => "t3");
const t4 = () => tick(1000).then(() => "t4");
const t5 = () => tick(250).then(() => "t5");

const tasks = [t1, t2, t3, t4, t5];
const ids = [1, 2, 3, 4, 5];

console.log("Start queue...");
for (let i = 0; i < tasks.length; i++) {
    callbackQueue.enqueue(tasks[i], ids[i], (error, value) => {
        console.log("callback result: ", value);
        if (error !== null) {
            console.log(value);
        } else console.log(error);
    });
}
