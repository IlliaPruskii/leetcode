const containerWithMostWater = (height) => {

	let volume = 0;
	const arrayLength = height.length;

	for (let i = 0; i < arrayLength; i++) {
		for (let j = i; j < arrayLength; j++) {
			const containerLength =  j - i;
			const containerHeight = height[i] < height[j] ? height[i] : height[j];
			const currentVolume = containerLength * containerHeight;
			if (currentVolume > volume) {
				volume = currentVolume;
			}
		}
	}

	return volume;
}

const height = [2,3,10,5,7,8,9];

console.log(containerWithMostWater(height))
