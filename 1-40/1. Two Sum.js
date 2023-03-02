/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 拿个对象当哈希表
var twoSum = function (nums, target) {
    let dict = {}
    let y
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        y = target - x
        if (dict[y] + 1) {//undifined+1 == NaN == false
            return [i, dict[y]]
        }
        if (!dict[x]) dict[x] = i
    }
}
