/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    if (nums.length < 3) return res
    nums.sort((x, y) => x - y)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] == nums[i]) continue
        let j = i + 1
        let k = nums.length - 1
        let sum = 0
        while (j < k) {
            if (j > i + 1 && nums[j - 1] == nums[j]) {
                j++
                continue
            }
            sum = nums[i] + nums[j] + nums[k]
            if (sum > 0) k--
            else if (sum < 0) j++
            else {
                res.push([nums[i], nums[j], nums[k]])
                j++
            }
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))