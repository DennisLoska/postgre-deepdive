function run(cb: () => void, t: number) {
    setTimeout(() => {
        cb();
    }, t);
}

const r1 = () => console.log("call me task 1!");
const r2 = () => console.log("call me task 2!");

console.log("Basic callback example:");
run(r1, 2000);
run(r2, 1000);

function tick(t: number, value: unknown, cb: (val: unknown) => unknown) {
    setTimeout(() => {
        cb(value);
    }, t);
}

function task(t: number, val: unknown) {
    tick(t, val, (value) => {
        console.log(value);
    });
}

const t1 = () => task(2000, "Call me callback based 1!");
const t2 = () => task(1000, "Call me callback based 2!");
const t3 = () => task(1500, "Call me callback based 3!");

t1();
t2();
t3();
