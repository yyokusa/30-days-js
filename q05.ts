function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let newArr = [];
    arr.forEach((elem, i) => {
        if (fn(elem, i)) {
            newArr.push(elem);
        }
    })
    return newArr;
};



// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.