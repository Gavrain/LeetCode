/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let lPoint = 0
    let rPoint = 1
    let length = 1
    while (rPoint < nums.length) {
        if (nums[lPoint] == nums[rPoint]) {
            rPoint++
            continue
        }
        if (rPoint > lPoint + 1) nums[lPoint + 1] = nums[rPoint]
        lPoint++
        rPoint++
        length++
    }
    return length
}