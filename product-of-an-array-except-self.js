/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var get_val = (val) => val === undefined ? 1 : val;

// var productExceptSelf = function(nums) {
//     var left_or = [], right_or = [];
//     for (let i = 0; i < nums.length; i++) {
//         left_or[i] = nums[i] * get_val(left_or[i - 1]);
//     }
    
//     for (let i = nums.length -1; i >= 0; i--) {
//         right_or[i] = nums[i] * get_val(right_or[i + 1]);
//     }
    
//     var result = [];
//     for(let i = 0; i <= nums.length -i; i++) {
//         result[i] = get_val(left_or[i - 1]) * get_val(right_or[i + 1]);
//     }
    
//     return result;
// };

// var productExceptSelf = function(nums) { 
//     var left_or = [1], right_or = 1;
//     for (let i = 0; i < nums.length; i++) {
//        left_or.push(left_or[i] * nums[i]);
//     }
//     for (let i = 0; i < nums.length; i++) {
//        left_or[nums.length - i - 1] = left_or[nums.length - i - 1] * right_or;
//        right_or = right_or * nums[nums.length - i - 1];
//     }
//     return left_or;
// }

var productExceptSelf = function(nums) { 
    var len = nums.length, output = [], product;
    
    product = 1;
    for(let i = 0; i < len - 1; i++) {
        output[i] = product;
        product *= nums[i];
    }
    
    output[len - 1] = product;
    product = 1;
    for(let i = len -1; i >= 1; i--) {
        output[i] *= product;
        product *= nums[i];
    }
    
    output[0] *= product;
    
    return output;
}