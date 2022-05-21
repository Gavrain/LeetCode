/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {//辣鸡硬模拟，既不是模拟也不是硬编码，不要学
    let res = []
    let rem
    let x = num
    let quotient
    function pushI(i, p) {
        while (i > 0) {
            res.push(p)
            i--
        }
    }

    rem = x % 1000
    quotient = (x - rem) / 1000
    x = rem
    pushI(quotient, 'M')

    rem = x % 100
    quotient = (x - rem) / 100
    x = rem
    if (quotient)
        if (quotient >= 5) {
            if (quotient == 9) res.push('CM')
            else {
                res.push('D')
                pushI(quotient - 5, 'C')
            }
        } else {
            if (quotient == 4) res.push('CD')
            else {
                pushI(quotient, 'C')
            }
        }

    rem = x % 10
    quotient = (x - rem) / 10
    x = rem
    if (quotient)
        if (quotient >= 5) {
            if (quotient == 9) res.push('XC')
            else {
                res.push('L')
                pushI(quotient - 5, 'X')
            }
        } else
            if (quotient == 4) res.push('XL')
            else {
                pushI(quotient, "X")
            }


    rem = x % 1
    quotient = (x - rem) / 1
    x = rem
    if (quotient >= 5) {
        if (quotient == 9) res.push('IX')
        else {
            res.push('V')
            pushI(quotient - 5, 'I')
        }
    } else
        if (quotient == 4) res.push('IV')
        else {
            pushI(quotient, 'I')
        }

    return res.join('')
}

console.log(intToRoman(1994))