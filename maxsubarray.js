var maxSubArray = function(nums) {
  let maxn = -Number.MAX_VALUE;
  let sum = 0;

  nums.forEach(function(item, index, array) {
    sum += item;

    if (sum > maxn)
      maxn = sum;

    if (sum < 0)
      sum = 0;
  });

  return maxn;
};