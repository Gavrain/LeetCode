/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//有时间再写 KMP
var strStr = function (haystack, needle) {
    let res = 0
    if (needle == '') return res
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                break
            }
            if (j == needle.length - 1) return res = i
        }
    }
    return res = -1
}