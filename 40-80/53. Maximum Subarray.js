/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = Number.MIN_VALUE
    let maxSum = Number.MIN_VALUE
    let i = 0
    while (i < nums.length) {
        pre = Math.max(nums[i], pre + nums[i])
        maxSum = Math.max(maxSum, pre)
        i++
    }
    return maxSum
}