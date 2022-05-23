/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//可以优化：rPoint从数组右侧开始，减少复制操作
var removeElement = function (nums, val) {
    let lPoint = 0
    let rPoint = 0
    let length = 0
    while (rPoint < nums.length) {
        if (val == nums[rPoint]) {
            rPoint++
            continue
        }
        if (rPoint > lPoint) nums[lPoint] = nums[rPoint]
        lPoint++
        rPoint++
        length++
    }
    return length
}