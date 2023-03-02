/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res = nums[0] + nums[1] + nums[2] - target
    nums.sort((x, y) => x - y)
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        let sum = 0
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k] - target
            res = Math.abs(sum) < Math.abs(res) ? sum : res
            if (sum > 0) k--
            else if (sum < 0) j++
            else return target
        }
    }
    return res + target
}