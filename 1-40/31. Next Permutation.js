/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let l = -1
    let r
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            l = i - 1
            break
        }
    }
    if (l > -1) {
        for (let i = nums.length - 1; i > l; i--) {
            if (nums[i] > nums[l]) {
                r = i
                break
            }
        }
        [nums[l], nums[r]] = [nums[r], nums[l]]
    }
    for (let i = 0; i < (nums.length - 1 - l) / 2; i++) {
        [nums[l + i + 1], nums[nums.length - i - 1]] = [nums[nums.length - i - 1], nums[l + i + 1]]
    }
}