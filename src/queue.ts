export class AsyncQueue<T> {
    private MAX = 3;
    private pending = 0;
    private queue: Array<() => Promise<T>> = [];

    constructor(max: number) {
        this.MAX = max;
    }

    async run(p: () => Promise<T>, id: number) {
        if (this.pending < this.MAX) {
            this.pending++;
            console.log(`pending: ${this.pending}`);
            try {
                console.log(`start task: ${id}`);
                const data = await p();
                console.log(`finished task: ${id}`);
                return { data, id };
            } finally {
                this.pending--;
                console.log(`pending: ${this.pending}`);
                this.queue.shift();
                if (this.queue.length > 0) {
                    console.log("call next promise from queue");
                    const [next] = this.queue;
                    next();
                }
            }
        } else {
            console.log("pushed to queue");
            this.queue.push(p);
            return { data: undefined, id };
        }
    }
}
