/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let ans = nums.map(v => v.toString()).sort((a, b) => compare(a, b)).join('')
    if (ans[0] == '0') return '0'
    return ans
}

function compare(a, b) {
    return a + b < b + a ? 1 : -1
}