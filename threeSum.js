const threeSum = (array) => {
	array.sort((a,b) => a - b);
	const triplets = [];

	for(let i=0; i < array.length - 2; i++){
		console.log(array[i], array[i-1])
		if(array[i] !== array[i-1]){ // making sure our solution set does not contain duplicate triplets
			let left = i + 1;
			let right = array.length - 1;

			while (left < right){
				const currentSum = array[i] + array[left] + array[right];
				if (currentSum === 0){
					triplets.push([array[i], array[left], array[right]]);
					while(array[left] === array[left + 1]) left ++
					while(array[right] === array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
					left ++;
					right --;
				} else if(currentSum < 0) {
					left ++
				} else if(currentSum > 0){
					right --
				}
			}
		}
	}
	return triplets
	// if (nums.every(elem => elem === 0) && nums.length >= 3) return [0, 0, 0]
	//
	// const optionArray = [];
	//
	// for (let i = 0; i < nums.length - 2; i++) {
	// 	for (let j = i + 1; j < nums.length - 1; j++) {
	// 		for (let k = j + 1; k < nums.length; k++) {
	// 			if (nums[i] + nums[j] + nums[k] === 0) {
	// 				optionArray.push([nums[i], nums[j], nums[k]]);
	// 			}
	// 		}
	// 	}
	// }
	//
	// for (const elem of optionArray) {
	// 	elem.sort((a, b) => a - b);
	// }
	//
	// const outputStringSet = new Set(optionArray.map((elem) => JSON.stringify(elem)));
	//
	// return [ ...outputStringSet ].map((elem) => JSON.parse(elem))
}

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

