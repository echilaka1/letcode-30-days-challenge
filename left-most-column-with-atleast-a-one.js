/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const [height, width] = binaryMatrix.dimensions()
    let x = width - 1
    let y = 0
    let best = -1
    while (x >= 0 && y <= height - 1) {
        if (binaryMatrix.get(y, x) === 0) {
            y++
        } else {
            best = x
            x--
        }
    }
    return best
    // let vec = binaryMatrix.dimensions;
    // let n = vec[0], m = vec[1];
    // let answer = m;
    
    // for (let i = 0; i < n; i++) {
    //     while (answer > 0 && binaryMatrix.get(i, answer - 1) == 1) {
    //         answer--;
    //     }
    // }
    
    // if (answer == m) {
    //     answer = -1;
    // }
    
    // return answer;
    // let m = binaryMatrix.dimensions;
    // let n = m[0];
    // let row = 0;
    // let col = n;
    
    // let left = 0;
    // let right = n;
    
    // while(row < m){
    //     let left = 0;
    //     while(left < right){
    //         let mid = Math.floor((left + right)/2);
    //         if(binaryMatrix[mid] == 1){
    //             right = mid;
    //         }else{
    //             left = mid+1;
    //         }
    //     }
    //     col = left;
    //     row++;
    // }
    
    // return col == n ? - 1 : col;

    // let row = binaryMatrix.dimensions, col = binaryMatrix.dimensions;
    // let current_row = 0;
    // let current_col = col - 1;
    
    // while (current_row < row && current_col >= 0) {
    //     if (binaryMatrix.get(current_row, current_col) == 0) {
    //         current_row += 1;
    //     } else {
    //         current_col -= 1;
    //     }
    // }
    
    // if (current_col != col - 1) {
    //     return current_col + 1;
    // } else {
    //     return -1;
    // }

    // let dimension = binaryMatrix.dimensions;
    // let row = dimension[0], col = dimension[1];
    // let i = 0, j = col - 1, minIndex = -1;
    
    // while (i < row && j >= 0) {
    //     if (binaryMatrix.get(i, j) == 0) {
    //         i++;
    //     } else {
    //         minIndex = j;
    //         j--;
    //     }
    // }
    
    // return minIndex;

    // let dimension = binaryMatrix.dimensions;
    // let row = dimension[0];
    // let col = dimension[1];
    // let leftmost = col;
    
    // let left = col;
    
    // for (let i = 0; i < row; i++) {
    //     while(binaryMatrix.get(i, left-1) == 1){
    //         left--;
    //         if (left == 0) {
    //             return 0;
    //         }
    //     }
        
    //     if (left < leftmost) {
    //         leftmost = left;
    //     }
    // }
    
    // return leftmost == col ? -1 : leftmost;
};