type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
    async function evaluateNext() {
        if (functions.length === 0) return;
        const fn = functions.shift();
        await fn();
        await evaluateNext();
    }
    await Promise.all(Array(n).fill(0).map(evaluateNext));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
