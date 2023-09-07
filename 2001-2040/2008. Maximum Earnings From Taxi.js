/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {
    let funds = new Array(n + 1).fill(0)
    let dict = new Map()
    for (let x of rides) {
        let end = x[1]
        if (!dict.has(end)) {
            dict.set(end, [x])
            continue
        }
        dict.get(end).push(x)
    }
    for (let i = 1; i <= n; i++) {
        funds[i] = funds[i - 1]
        if (dict.has(i))
            for (let x of dict.get(i)) {
                let start = x[0]
                let fund = funds[start] + i - start + x[2]
                if (fund > funds[i]) funds[i] = fund
            }
    }
    return funds[n]
}