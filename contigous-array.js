/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var mas = new Map();
    mas.set(0, -1);
    let count = 0, max_length = 0;
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? count-- : count++;
        if (mas.has(count)) {
            max_length = Math.max(max_length, i - mas.get(count));
        } else {
            mas.set(count, i);
        }
        if (mas.has(count) === -1) {
            mas.set(count, i);
        }
    }
    
    return max_length;
};