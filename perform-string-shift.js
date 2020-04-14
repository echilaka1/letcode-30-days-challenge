/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    var total_shift = 0;
    
    for (let i = 0; i < shift.length; i++) {
        var direction = shift[i][0];
        var amount = shift[i][1];
        if (direction == 0) {
            total_shift -= amount;
        } else {
            total_shift += amount;
        }
    }
    
    var new_front = "";
    var new_back = "";
    
    if (total_shift < 0) {
        
        total_shift = Math.abs(total_shift) % s.length;
        
        new_front = s.substr(total_shift);
        new_back = s.substr(0, total_shift);
        
    } else if (total_shift > 0) {
        
        total_shift = total_shift % s.length;
        
        new_front = s.substr(s.length - total_shift, total_shift );
        new_back = s.substr(0, s.length - total_shift);
        
    } else {
        return s;
    }
    
    return new_front + new_back;
};