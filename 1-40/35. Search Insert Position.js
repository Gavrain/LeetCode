/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    if (nums[r] < target) return nums.length
    let mid
    while (l < r) {
        mid = (l + r) >> 1
        if (nums[mid] > target) r = mid
        else if (nums[mid] < target) l = mid + 1
        else return mid
    }
    if (nums[l - 1] == target) returnl - 1
    return l
}