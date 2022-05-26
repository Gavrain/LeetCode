/**
 * @param {character[][]} board
 * @return {boolean}
 */
//执行用时：56 ms, 在所有 JavaScript 提交中击败了99.77 %的用户
//内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了85.22 %的用户
var isValidSudoku = function (board) {
    let rowList = {}
    let colList = {}
    let squarList = {}
    let tCell
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            tCell = board[i][j]
            if (tCell == '.') continue
            if (!(tCell in rowList)) rowList[tCell] = new Set([i])
            else if (rowList[tCell].has(i)) return false
            else rowList[tCell].add(i)
            if (!(tCell in colList)) colList[tCell] = new Set([j])
            else if (colList[tCell].has(j)) return false
            else colList[tCell].add(j)
            let squar = (j - j % 3) + (i - i % 3) / 3
            if (!(tCell in squarList)) squarList[tCell] = new Set([squar])
            else if (squarList[tCell].has(squar)) return false
            else squarList[tCell].add(squar)
        }
    }
    return true
}