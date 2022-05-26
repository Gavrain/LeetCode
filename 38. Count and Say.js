/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let res = '1'
    function cAndS() {
        let fstNote = res[0]
        let noteBook = [1, fstNote]
        for (let i = 1; i < res.length; i++) {
            if (res[i] == res[i - 1]) noteBook[noteBook.length - 2]++
            else {
                noteBook.push(1)
                noteBook.push(res[i])
            }
        }
        res = noteBook.join('')
    }
    while (n > 1) {
        cAndS()
        n--
    }
    return res
}