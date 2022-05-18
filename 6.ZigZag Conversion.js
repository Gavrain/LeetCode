/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s
    let size = (numRows << 1) - 2
    let num = Math.ceil(s.length / size)
    let resMarix = []
    for (let i = 0; i < numRows; i++) {
        resMarix.push([])
        for (let j = 0; j < num; j++) {
            resMarix[i].push([])
        }
    }

    for (let i = 0; i < s.length; i++) {

        let v2 = Math.floor(i / size)
        let order = i % size + 1
        let v1 = (order > numRows ? (numRows << 1) - order : order) - 1
        resMarix[v1][v2].push(s[i])
    }
    let t = []
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < num; j++) {
            t.push(resMarix[i][j].join(''))
        }
    }
    return t.join('')
}
