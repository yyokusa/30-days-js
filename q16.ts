type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
    let timeout = null;
    let nextTimeToCallFn = null;
  return function (...args) {
        let delay = Math.max(0, nextTimeToCallFn - Date.now());
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
            nextTimeToCallFn = Date.now() + t;
        }, delay);
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */