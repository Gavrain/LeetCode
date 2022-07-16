/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((x, y) => x - y)
    let dict = [[[]]]
    for (let i = 1; i <= target; i++) {
        dict.push([])
        for (let x of candidates) {
            if (x > i) {
                break
            }
            for (arr of dict[i - x]) {
                if (arr.length == 0 || x >= arr[arr.length - 1]) dict[i].push([...arr, x])
            }
        }
    }
    return dict[target]
}