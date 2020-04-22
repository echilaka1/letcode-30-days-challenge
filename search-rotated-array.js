var search = function(nums, target) {
    var result = -1;
    var pivot = false;
    var previous = null;
    
    for (var i = 0; i < nums.length; i++) {
        if (previous > nums[i] && !pivot) {
            pivot = true;
        }
        
        if (nums[i] === target) {
            result = i;
            break;
        }
        else if (pivot && nums[i] > target) {
            break;
        }
        
        previous = nums[i];
    }
    return result;
};