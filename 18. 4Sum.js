/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return []
    let i, j, k, l, sum
    let res = []

    nums.sort((x, y) => x - y)

    function getSum() {
        return nums[i] + nums[j] + nums[k] + nums[l]
    }

    for (i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        for (j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue
            k = j + 1
            l = nums.length - 1
            while (k < l) {
                sum = getSum()
                if (sum > target) l--
                else if (sum < target) k++
                else if (k > j + 1 && nums[k] == nums[k - 1]) {
                    k++
                }
                else {
                    res.push([nums[i], nums[j], nums[k], nums[l]])
                    k++
                    l--
                }
            }
        }
    }
    return res
}

nums = [2, 2, 2, 2, 2], target = 8

console.log(fourSum(nums, target))