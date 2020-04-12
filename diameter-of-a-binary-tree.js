/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var countDiameter = function (root) {
    if (!root) return 0;
    
    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    
    var center = countDiameter(root.left) + countDiameter(root.right);
    var left = diameterOfBinaryTree(root.left);
    var right = diameterOfBinaryTree(root.right);
    
    return Math.max(center, left, right);
};