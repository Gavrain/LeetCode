/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length == 0 || matrix[0].length == 0) return []
    let m = matrix.length
    let n = matrix[0].length
    let visited = []
    for (let i = m; i > 0; i--) {
        visited.push(new Array(n).fill(false))
    }
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let direction = 0
    let changeDirection = () => {
        direction = (direction + 1) % 4
    }
    let x = 0, nx = 0
    let y = 0, ny = 0
    let answer = []
    let count = 0
    while (1) {
        answer.push(matrix[x][y])
        visited[x][y] = true
        count++
        if (count >= m * n) break
        nx = x + directions[direction][0]
        ny = y + directions[direction][1]
        if (nx >= m || ny >= n || nx < 0 || ny < 0 || visited[nx][ny]) changeDirection()
        x += directions[direction][0]
        y += directions[direction][1]
    }
    return answer
}   