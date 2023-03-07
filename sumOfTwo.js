/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var sumOfTwo = function(nums, target) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], i)
	}

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]
		
		if (map.has(diff) && map.get(diff) !== i) {
			return [i, map.get(diff)]
		}
	}
};

const nums = [3,2,4];
const target = 6;

console.log(sumOfTwo(nums, target));
