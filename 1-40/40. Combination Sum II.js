/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (candidates.length == 1) {
        return candidates[0] == target ? [candidates] : []
    }
    let nCandidates = candidates.filter(x => x <= target).sort((x, y) => x - y)
    let mark = [1]
    let i = 1
    while (i < nCandidates.length) {
        if (nCandidates[i] == nCandidates[i - 1]) {
            nCandidates.splice(i, 1)
            mark[i - 1]++
        }
        else {
            mark.push(1)
            i++
        }
    }
    let depth = nCandidates.length
    let temp = []
    let res = []
    function dfs(d, rest) {
        if (rest == 0) {
            res.push([...temp])
            return
        }
        if (d >= depth) {
            return
        }
        if (nCandidates[d] > rest) {
            return
        }
        dfs(d + 1, rest)

        for (let i = 1; i <= mark[d]; i++) {
            temp.push(nCandidates[d])
            dfs(d + 1, rest - i * nCandidates[d])
        }

        for (let i = 1; i <= mark[d]; i++) {
            temp.pop()
        }
    }
    dfs(0, target)
    return res
}