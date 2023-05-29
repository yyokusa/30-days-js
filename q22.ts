type MultiDimensionalArray = (number | 
MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: 
number):  MultiDimensionalArray {
    if (n === 0) return arr;
    let elems = [];
    
    function helper(arr:  MultiDimensionalArray, 
currDepth: number):  MultiDimensionalArray {
        arr.forEach(elem => {
            if (Array.isArray(elem) && currDepth > 0 
&&currDepth <= n) {
                helper(elem, currDepth - 1)
            } else {
                elems.push(elem);
            }
        })
        return elems;
    }

    return helper(arr, n);
};





/*

Given a multi-dimensional array arr and a depth n, 
return a flattened version of that array.

A multi-dimensional array is a recursive data 
structure that contains integers or other 
multi-dimensional arrays.

A flattened array is a version of that array with some 
or all of the sub-arrays removed and replaced with the 
actual elements in that sub-array. This flattening 
operation should only be done if the current depth of 
nesting is less than n. The depth of the elements in 
the first array are considered to be 0.

Please solve it without the built-in Array.flat 
method.

*/
