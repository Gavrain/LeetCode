/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const len = strs.length
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
        let key = returnHashKey(str)
        map[key] ? map[key].push(str) : map[key] = [str]
    }
    return Object.values(map)
}

function returnHashKey(str) {
    const key = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        key[str.charCodeAt(i) - 97]++
    }
    return key
}
