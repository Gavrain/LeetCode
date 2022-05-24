/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
//减半法
var divide = function (dividend, divisor) {
    let MAX_INT = 2 ** 31 - 1
    let MIN_INT = -(2 ** 31)
    let res = 0
    let mark = false
    if (dividend == MIN_INT && divisor == -1) return res = MAX_INT
    if (dividend > 0) {
        mark = !mark
        dividend = -dividend
    }
    if (divisor > 0) {
        mark = !mark
        divisor = -divisor
    }
    while (dividend <= divisor) {
        let toRemove = divisor
        let toAdd = 1
        while (toRemove >= (dividend >> 1) + 1) {
            toRemove = toRemove << 1
            toAdd = toAdd << 1
        }
        dividend -= toRemove
        res += toAdd
    }
    if (mark) res = -res
    return res
}
