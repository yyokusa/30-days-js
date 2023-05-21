class TimeLimitedCache {
    cache: Map<number, [number, NodeJS.Timeout]>;

    constructor() {
        this.cache = new Map<number, [number, NodeJS.Timeout]>();
    }

    set(key: number, value: number, duration: number): boolean {
        const keyExists = this.cache.has(key);
        if (keyExists)
            clearTimeout(this.cache.get(key)[1]);
        this.cache.set(key, [value, setTimeout(() => this.cache.delete(key), duration)]);
        return keyExists;
    }

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key)[0] : -1;
    }

	count(): number {
        return this.cache.size;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */


/*

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method 
should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/
