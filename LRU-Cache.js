/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.queue = []
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.hasData = function(key) {
    return this.cache.hasOwnProperty(key)
}

LRUCache.prototype.recentlyUsed = function(key) {
    if (this.hasData(key)) {
        this.queue = this.queue.filter(item => item !== key)   
    } else if (this.queue.length >= this.capacity) {
        const val = this.queue.pop()
        delete this.cache[val]
    }
    this.queue.unshift(key) 
}

LRUCache.prototype.get = function(key) {  
    if (!this.hasData(key)) {
        return -1
    }
    this.recentlyUsed(key)
    return this.cache[key]
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.recentlyUsed(key)
    this.cache[key] = value
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */