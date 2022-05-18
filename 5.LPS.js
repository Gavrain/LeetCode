/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散方法
var longestPalindrome = function (s) {
    let lPS = []
    let maxLength = 0
    let tLPS = []
    let tMaxLength = 0
    let type = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[i - j] != s[i + j]) break
            tLPS.push(s[i + j])
            tMaxLength++
        }
        tMaxLength = tMaxLength * 2 - 1
        if (tMaxLength > maxLength) {
            lPS = tLPS
            maxLength = tMaxLength
            type = 0
        }
        tMaxLength = 0
        tLPS = []
        for (let j = 0; j <= i; j++) {
            if (s[i - j] != s[i + j + 1]) break
            tLPS.push(s[i + j + 1])
            tMaxLength++
        }
        tMaxLength = tMaxLength * 2
        if (tMaxLength > maxLength) {
            lPS = tLPS
            maxLength = tMaxLength
            type = 1
        }
        tMaxLength = 0
        tLPS = []
    }
    let pSL = [...lPS].reverse()
    if (!type) pSL.pop()

    return [...pSL, ...lPS].join('')
}

console.log(longestPalindrome('cbbd'))
