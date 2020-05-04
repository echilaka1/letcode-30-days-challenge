var maxPathSum = function(root) {
    let answer = Number.MIN_SAFE_INTEGER;
    function dfs(root){
        if(root === null) return 0;
        let x = dfs(root.left);
        let y = dfs(root.right);
        answer = Math.max(answer, x + y + root.val);
        return Math.max(0, root.val + Math.max(x,y));
    }
    dfs(root);
    return answer;
};