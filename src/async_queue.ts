type Task<T> = { task: () => Promise<T>; id: number };

export class AsyncQueue<T> {
    private MAX = 3;
    public pending = 0;
    private queue: Task<T>[] = [];
    public results: unknown[] = [];

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
                this.pending--;
                console.log(`finished task: ${id}`);
                this.results.push({ data, id });
                return { data, id };
            } finally {
                if (this.queue.length > 0) {
                    const next = this.queue.shift();
                    if (next) {
                        console.log(
                            `call next promise from queue: ${next?.id}`,
                        );
                        await this.run(next?.task, next?.id);
                    } else {
                        console.assert(false, "This should never happen.");
                    }
                }
            }
        } else {
            console.log("pushed to queue");
            this.queue.push({ task: p, id });

            return {
                data: undefined,
                id: `${id} queued`,
            };
        }
    }
}
