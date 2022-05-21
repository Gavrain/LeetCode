/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    let tmp = ['']
    let rem
    while (x != 0) {
        rem = x % 10
        x = (x - rem) / 10
        tmp.push(rem)
        tmp.push('')
    }
    while (tmp.length > 1) {
        if (tmp[0] != tmp[tmp.length - 1]) return false
        tmp.shift()
        tmp.pop()
    }
    return true
}