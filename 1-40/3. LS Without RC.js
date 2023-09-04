/**
 * @param {string} s
 * @return {number}
 */
//滑动窗口
var lengthOfLongestSubstring = function (s) {
    let dict = new Map()
    let max = 0
    let tMax = 0
    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (i) dict.delete(s[i - 1])
        while (j < s.length && !dict.has(s[j])) {
            dict.set(s[j], j)
            j++
        }
        tMax = j - i
        max = max > tMax ? max : tMax
        if (j >= s.length) break
    }
    return max
}

/**
 * @param {string} s
 * @return {number}
 */
//动态规划
var lengthOfLongestSubstring = function (s) {
    if (s == "") return 0
    let ans = 0
    let len = s.length
    let maxLens = new Array(len).fill(0)
    let preDict = new Map()
    let max = 1
    maxLens[0] = 1
    preDict.set(s[0], 0)
    for (let i = 1; i < len; i++) {
        let pre = preDict.has(s[i]) ? preDict.get(s[i]) : -1
        maxLens[i] = Math.min(maxLens[i - 1] + 1, i - pre)
        max = Math.max(maxLens[i], max)
        preDict.set(s[i], i)
    }
    return max
}