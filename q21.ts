function chunk(arr: any[], size: number): any[][] {
    let chunked = [];
    let idx = 0;
    while (idx < arr.length) {
        const remElementsSize = arr.length - idx;
        const currSizeToRead = size > remElementsSize ?  remElementsSize : size;
        const currChunk = arr.slice(idx, idx + currSizeToRead);
        chunked.push(currChunk);
        idx += currSizeToRead;
    }
    return chunked;
};

/*
Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length 
of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/
