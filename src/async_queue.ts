type Task<T> = {
    task: () => Promise<T>;
    res: (value: unknown) => void;
    rej: () => void;
    id: number;
};

export class AsyncQueue<T> {
    private MAX = 3;
    public pending = 0;
    private queue: Task<T>[] = [];

    constructor(max: number) {
        this.MAX = max;
    }

    run<T>(t: Task<T>) {
        const { task, res, rej, id } = t;
        console.log(`finished task: ${id}`);
        task().then(res).catch(rej);
    }

    enqueue(p: () => Promise<T>, id: number) {
        if (this.pending < this.MAX) {
            this.pending++;
            console.log(`pending: ${this.pending}`);
            return new Promise((res, rej) => {
                try {
                    console.log(`start task: ${id}`);
                    this.run({ task: p, res, rej, id });
                } finally {
                    this.pending--;
                    if (this.queue.length > 0) {
                        console.log(`finished task: ${id}`);
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
                }
            });
        } else {
            return new Promise((res, rej) => {
                console.log("pushed to queue");
                this.queue.push({ task: p, res, rej, id });
            });
        }
    }
}
