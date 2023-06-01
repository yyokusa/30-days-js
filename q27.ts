type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  m = new Map<string, Callback[]>();
  subscribe(eventName: string, callback: Callback): 
Subscription {
    if (this.m.has(eventName)) {
        this.m.get(eventName).push(callback);
    } else {
        this.m.set(eventName, [callback]);
    }
    return {
      unsubscribe: () => {
          
this.m.get(eventName).splice(this.m.get(eventName).length 
- 1, 1);
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const a = [];
    if (this.m.has(eventName)){
      for (const i of this.m.get(eventName)) {
          a.push(i(...args));
      }
    }
    return a;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with 
onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', 
onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
