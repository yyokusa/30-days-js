class ArrayWrapper {
    nums;

	constructor(nums: number[]) {
        this.nums = nums;
    }

	valueOf() {
        return this.nums.reduce((acc, elem) => elem + 
acc, 0);
    }

	toString() {
        let a = String(this.nums)
        a.slice(1, a.length - 1);
        return '[' + a + ']';
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
