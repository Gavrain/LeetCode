/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((x, y) => x - y)
    let len = nums.length
    let visited = []
    visited.length = len
    visited.fill(false)
    let temp = []
    let res = []

    function dfs(dep) {
        if (dep == len) {
            res.push([...temp])
            return
        }
        for (let i = 0; i < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) continue
            if (visited[i]) continue
            temp.push(nums[i])
            visited[i] = true
            dfs(dep + 1)
            temp.pop()
            visited[i] = false
        }
    }
    dfs(0)
    return res
}