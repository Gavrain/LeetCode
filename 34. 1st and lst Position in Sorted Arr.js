/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//执行用时：44 ms, 在所有 JavaScript 提交中击败了100 %的用户
//内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了99 %的用户
var searchRange = function (nums, target) {
    function findX(l, r, dir = 1) {
        let mid
        while (l <= r) {
            mid = (l + r) >> 1
            if (nums[mid] == target) {
                if (dir < 2) if (mid == 0 || findX(l, mid - 1, 0) == -1) res[0] = mid
                if (dir > 0) if (mid == length - 1 || findX(mid + 1, r, 2) == -1) res[1] = mid
                return 0
            }
            if (nums[mid] > target) r = mid - 1
            else l = mid + 1
        }
        return -1
    }
    let res = [-1, -1]
    let length = nums.length
    if (length == 0) return res
    findX(0, length - 1)
    return res
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))