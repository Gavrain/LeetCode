/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let flag = n > 0
    n = Math.abs(n)
    let result = 1
    let t = x
    while (n > 0) {
        if (n & 1) {
            result *= t
            n -= 1
        }
        t *= t
        n = n / 2
    }
    return flag ? result : 1 / result
}