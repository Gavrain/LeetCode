/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//执行用时：48 ms, 在所有 JavaScript 提交中击败了99.06 %的用户
var search = function (nums, target) {
    //二分查找
    function findX(l, r) {
        let mid
        while (l <= r) {
            mid = (l + r) >> 1
            if (nums[mid] == target) {
                res = mid
                break
            }
            if (nums[mid] > target) r = mid - 1
            else l = mid + 1
        }
    }
    if (target == nums[0]) return 0
    //找不到就返回默认-1
    let res = -1
    let l = 0
    let r = nums.length - 1
    let mid
    if (nums[l] > nums[r]) {//否则是在0处spin，直接二分
        while (l < r) {
            mid = l + r + 1 >> 1//临界的时候 mid == r 才能在下一步结束循环，所以向上取整
            if (nums[mid] > nums[0]) {
                l = mid//l = mid + 1 会误判恰好l处为最大值r处为最小值的情况
            }
            else r = mid - 1
        }
        if (target > nums[0]) findX(0, l)
        else findX(l + 1, nums.length - 1)
    } else findX(l, r)
    return res
}