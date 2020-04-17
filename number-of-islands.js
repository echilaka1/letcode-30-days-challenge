/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let dfs = (x, y, color, vis) => {
        if (grid[x][y] != 1) return;
        vis[x][y] = 1;
        grid[x][y] = color;
        const dir = [[0,1],[1,0],[0,-1],[-1,0]]; 
        for(let d of dir) {
            const [dx, dy] = d;
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || nx >= m || ny < 0 || ny >= n || vis[nx][ny] == 1) continue;
            if (grid[nx][ny] == 1)
                dfs(nx, ny, color, vis);
        }
    }
    
    const m = grid.length;
    if (m == 0) return 0;
    const n = grid[0].length;
    let vis = new Array(m).fill().map(() => Array(n).fill(0));
    let color = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                color--;
                dfs(i, j, color, vis);
            }
        }
    }
    return -color;
};