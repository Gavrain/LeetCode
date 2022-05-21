/**
 * @param {string[]} strs
 * @return {string}
 */
/*执行用时：64 ms, 在所有 JavaScript 提交中击败了73.24 %的用户
内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了71.62 %的用户*/
//本题之前看过题解思路，五分钟一次过
var longestCommonPrefix = function (strs) {
    function getCommonPrefix(s1, s2) {
        let i = 0
        for (; i < s1.length && i < s2.length; i++) {
            if (s1[i] != s2[i]) break
        }
        return s1.slice(0, i)
    }
    let res = strs[0]
    for (let i = 0; i < strs.length; i++) {
        res = getCommonPrefix(strs[i], res)
    }
    return res
}