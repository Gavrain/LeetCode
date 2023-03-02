/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    let temp = []
    let dict = new Map
    for (let x of nums) {
        dict.set(x, 0)
    }
    function dfs(dep) {
        if (dep == nums.length) {
            res.push([...temp])
            return
        }
        for (let x of nums) {
            if (dict.get(x) == 0) {
                temp.push(x)
                dict.set(x, 1)
                dfs(dep + 1)
                dict.set(temp.pop(), 0)
            }

        }
    }
    dfs(0)
    return res
}
console.log(permute([1, 2, 3, 4, 5]))