/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let l1 = num1.length
    let l2 = num2.length
    let res = []
    res.length = l1 + l2
    res.fill(0)
    let temp = 0
    let carry = 0
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            temp = parseInt(num2[l2 - 1 - j]) * parseInt(num1[l1 - 1 - i])
            res[j + i] += temp
        }
    }
    for (let i = 0; i < res.length; i++) {
        res[i] += carry
        temp = res[i] % 10
        carry = (res[i] - temp) / 10
        res[i] = temp
    }
    temp = 0
    for (let i = res.length - 1; i >= 0; i--) {
        if (res[i] != 0) {
            temp = i + 1
            break
        }
    }
    res.splice(temp)
    if (res.length == 0) res.push(0)
    return res.reverse().join('')
}
console.log(multiply('6', '501'))