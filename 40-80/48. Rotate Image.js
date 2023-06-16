/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length
    let temp = 0
    let limit = 0
    for (let start = 0; start < (len - 1) / 2; start++) {
        limit = len - 1 - start
        for (let i = 0; start + i < limit; i++) {
            temp = matrix[start][start + i]
            matrix[start][start + i] = matrix[limit - i][start]
            matrix[limit - i][start] = matrix[limit][limit - i]
            matrix[limit][limit - i] = matrix[start + i][limit]
            matrix[start + i][limit] = temp
        }
    }
}

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
rotate(matrix)
console.log(matrix)