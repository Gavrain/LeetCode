/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let INT_MAX = 2 ** 31 - 1
    let INT_MIN = -(2 ** 31)
    let i = 0
    let mark = 0
    let res = 0
    while (s[i] == ' ' && i < s.length) {
        i++
    }
    if (i == s.length) return 0
    if (s[i] == '-' || s[i] == '+') {
        mark = s[i] == '-' ? 1 : 0
        i++
    }
    while (s[i] > -1 && s[i] != ' ') {
        res = s[i] - 0 + res * 10
        i++
        if (!mark && res > INT_MAX) {
            return INT_MAX
        }
        if (mark && -res < INT_MIN) {
            return INT_MIN
        }
    }
    if (mark) res = -res
    return res

}