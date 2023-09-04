function subarraySum(nums: number[], k: number): number {
	let l = nums.length
	let count = 0

	let pre = 0
	let dict: Map<number, number> = new Map()
	for (let x of nums) {
		pre += x
		if (pre == k) count++
		let time: number = dict.get(pre) || 0
		count += dict.get(pre - k) || 0
		dict.set(pre, time + 1)
	}
	return count
}
