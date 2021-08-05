const threeSumClosest = (nums, target) => {
	let currentValue = nums[0] + nums[1] + nums[2];

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				const currentDifferent = Math.abs( nums[i] + nums[j] + nums[k] - target);
				let prevDifferent = Math.abs( currentValue - target);
				if (currentDifferent < prevDifferent) {
					currentValue = nums[i] + nums[j] + nums[k]
				}
			}
		}
	}

	return currentValue;
}

const nums = [-3,-2,-5,3,-4];
const target = -1;

console.log(threeSumClosest(nums, target))
