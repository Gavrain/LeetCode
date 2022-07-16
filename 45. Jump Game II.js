/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length
    let step = 0
    let edge = 0
    let tEdge = 0
    for (let i = 0; i < len; i++) {
        if (edge >= len - 1) break
        if (nums[i] + i > tEdge) {
            tEdge = nums[i] + i
        }
        if (i == edge) {
            step++
            edge = tEdge
        }
    }
    return step
}
// 动态规划，很慢，没必要
// var jump = function (nums) {
//     let len = nums.length
//     let note = []
//     note.length = len
//     note.fill(len)
//     note[0] = 0
//     for (let i = 0; i < len; i++) {
//         if (nums[i] == 0) continue
//         for (let j = 1; j <= nums[i]; j++) {
//             if (note[i] + 1 < note[j + i])
//                 note[j + i] = note[i] + 1
//         }
//     }
//     return note[note.length - 1]
// }