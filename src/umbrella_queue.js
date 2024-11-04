// - Concurrency limit.
// - As soon as task is done the promise should resolve.
// - Errors do not kill the queue.
// - Errors are propagated to the caller.
// - There is never a time where the queue is non-empty and we don’t have MAX tasks running.
// - BONUS: Queue size limit.

class UmbrellaQueue {
    constructor(maxPendingCount, maxQueuedTasks) {
        this.maxPendingCount = maxPendingCount;
        this.maxQueuedTasks = maxQueuedTasks;
        this.queue = [];
        this.pendingCount = 0;
    }

    runOne(queueItem) {
        const { resolve, reject, task } = queueItem;
        task()
            .then(resolve, reject)
            .finally(() => {
                const queueItem = this.queue.shift();
                if (queueItem) {
                    this.runOne(queueItem);
                } else {
                    this.pendingCount--;
                }
            });
    }

    enqueue(task) {
        if (this.pendingCount < this.maxPendingCount) {
            this.pendingCount++;
            return new Promise((resolve, reject) => {
                this.runOne({ resolve, reject, task });
            });
        } else {
            return new Promise((resolve, reject) => {
                this.queue.push({ resolve, reject, task });
            });
        }
    }
}

function tick(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const queue = new UmbrellaQueue(3, null);
queue.enqueue(() => tick(1000)).then(() => console.log("a"));
queue.enqueue(() => tick(1000)).then(() => console.log("b"));
queue.enqueue(() => tick(1000)).then(() => console.log("c"));
queue.enqueue(() => tick(1000)).then(() => console.log("d"));
queue.enqueue(() => tick(1000)).then(() => console.log("e"));
queue.enqueue(() => tick(1000)).then(() => console.log("f"));
queue.enqueue(() => tick(1000)).then(() => console.log("g"));
queue.enqueue(() => tick(1000)).then(() => console.log("h"));
queue.enqueue(() => tick(1000)).then(() => console.log("i"));
queue.enqueue(() => tick(1000)).then(() => console.log("j"));
queue.enqueue(() => tick(1000)).then(() => console.log("k"));
