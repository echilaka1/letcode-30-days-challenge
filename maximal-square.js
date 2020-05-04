let maximalSquare = (A, max = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let pre = Array(N + 1).fill(0),
        cur = Array(N + 1).fill(0);
    for (let i = 1; i <= M; ++i, [[pre, cur]] = [[cur, pre]])
        for (let j = 1; j <= N; ++j)
            if (A[i - 1][j - 1] == '1')
                cur[j] = 1 + Math.min(pre[j - 1], pre[j], cur[j - 1]),
                max = Math.max(max, cur[j] * cur[j]);
            else
                cur[j] = 0;
    return max;
}