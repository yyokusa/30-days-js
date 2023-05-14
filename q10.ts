function curry(fn: Function): Function {
    let expectedNoOfParameters = fn.length;
    let parameters = [];
    let curried = (...args) => {
        parameters.push(...args);
        expectedNoOfParameters -= args.length;
        if (expectedNoOfParameters === 0) {
            return fn(...parameters);
        }
        return curried;
    };
    return curried;
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

 function curry2(fn: Function): Function {
   return function curried(...args: any[]): any {
      if (args.length >= fn.length) {
         return fn(...args);
      }

      return (...nextArgs: any[]): any => curried(...args, ...nextArgs);
   }
};

function curry3(fn: Function): Function {
    return function curried(...args: any[]): any {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return curried.bind(this, ...args);
    };
}

/*
Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.
*/