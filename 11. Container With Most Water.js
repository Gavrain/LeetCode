/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    function getMax() {
        return (height[l] < height[r] ? height[l] : height[r]) * (r - l)
    }
    let l = 0
    let tL = l
    let r = height.length - 1
    let tR = r
    let max = getMax()
    let tMax = max

    while (r > l) {
        if (height[l] <= height[r]) {//移动短边
            l++
            if (height[l] > height[tL]) {//比原边界长才可能获得更大的容量，才需要计算一次，下同（虽然性能跟每次都计算差不了很多）
                tMax = getMax()
                max = max > tMax ? max : tMax
                tL = max > tMax ? tL : l
            }
        }
        if (height[l] > height[r]) {
            r--
            if (height[r] > height[tR]) {
                tMax = getMax()
                max = max > tMax ? max : tMax
                tR = max > tMax ? tR : r
            }
        }
    }
    return max
}