import { AsyncQueue } from "./async_queue";
import { RandomReadQueryFactory } from "./random_read";
import { RandomWriteQueryFactory } from "./random_write";

type QueryFactory<T> =
    | typeof RandomReadQueryFactory<T>
    | typeof RandomWriteQueryFactory<T>;

export function taskRunner<T>(
    queryFactory: QueryFactory<T>,
    queue: AsyncQueue<T>,
    taskCount: number,
) {
    console.time("execute tasks:");

    const results: unknown[] = [];
    let c = 1;

    while (c <= taskCount) {
        const qF = new queryFactory(c);
        const task = qF.create();

        queue
            .run(task, c)
            .then((res) => {
                console.log(`result for task ${res?.id}`);
                results.push(res);
                if (queue.pending === 0) {
                    console.log("all tasks done!");
                    console.log("results:");
                    console.log(results);
                    console.log("queue results:");
                    console.log(queue.results);
                    console.timeEnd("read tasks");
                    process.exit(0);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        c++;
    }
    return results;
}
