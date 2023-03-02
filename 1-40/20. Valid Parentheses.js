/**
 * @param {string} s
 * @return {boolean}
 */
// 用 map 可以不用写一堆 if else
var isValid = function (s) {
    let stack = []
    let p = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(1)
        }
        else if (s[i] == ')') {
            if (p == 1) stack.pop()
            else return false
        } else if (s[i] == '[') {
            stack.push(2)
        }
        else if (s[i] == ']') {
            if (p == 2) stack.pop()
            else return false
        } else if (s[i] == '{') {
            stack.push(3)
        }
        else if (s[i] == '}') {
            if (p == 3) stack.pop()
            else return false
        }
        p = stack[stack.length - 1]
    }
    return stack.length == 0 ? true : false
}

console.log(isValid("(]"))