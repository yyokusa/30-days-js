declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): 
Record<string, T[]>
    }
}

Array.prototype.groupBy = function<T>(fn: (item: T) => 
string) {
    const m: Record<string, T[]> = {};
    for (const item of this) {
        const key = fn(item);
        if (key in m) {
            m[key].push(item);
        } else {
            m[key] = [item];
        }
    }
    return m;
}

/**
 * [1,2,3].groupBy(String) // 
{"1":[1],"2":[2],"3":[3]}
 */
