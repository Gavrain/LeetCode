/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let dict = {}
    let max = 0
    let tMax = 0
    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (i) delete dict[s[i - 1]]
        while (j < s.length && !(dict[s[j]] + 1)) {
            dict[s[j]] = j
            j++
        }
        tMax = j - i
        max = max > tMax ? max : tMax
        if (j >= s.length) break
    }
    return max
}
