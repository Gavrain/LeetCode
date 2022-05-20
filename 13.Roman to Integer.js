/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let dict = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let res = 0

    for (let i = 1; i < s.length; i++) {
        let p = dict[s[i - 1]]
        let n = dict[s[i]]
        if (p < n) {
            res -= p
        } else {
            res += p
        }
    }
    res += dict[s[s.length - 1]]
    return res
}
