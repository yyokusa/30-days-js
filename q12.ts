type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        return await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeout));
        })
    }
};


function timeLimit2(fn: Fn, t: number): Fn {
  return async function(...args) {
    return new Promise(async (resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      try {
        const result = await fn(...args);
        resolve(result);
      } catch(err) {
        reject(err);
      }
      clearTimeout(timeout);
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
