/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    function generateP(str, lpNum, depth) {
        if (depth == n && lpNum == 0) {
            res.push(str)
        }
        if (depth < n) generateP(str + '(', lpNum + 1, depth + 1)
        if (lpNum > 0) generateP(str + ')', lpNum - 1, depth)
    }
    generateP('', 0, 0)
    return res
}