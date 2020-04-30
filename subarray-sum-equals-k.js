var subarraySum = function(nums, k) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums.reduce((s, cur, i) => {
        for (let j = 0; j < i; j++) {
            if (cur - nums[j] === k) s++;
        }
        return cur === k ? s + 1 : s;
    }, 0)
};