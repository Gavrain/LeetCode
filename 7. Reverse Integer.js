/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let INT_MAX = (2 ** 31 - 1) / 10
    let INT_MIN = -(2 ** 31) / 10
    let rem
    let res = 0
    while (x != 0) {
        rem = x % 10
        x = (x - rem) / 10
        res = res * 10 + rem
        if (x != 0) {
            if (res > INT_MAX || res < INT_MIN) {
                res = 0
                break
            }
        }
    }
    return res
}