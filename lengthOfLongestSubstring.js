const lengthOfLongestSubstring = (s) => {
	const characterArray =  Array.from(s);

	if (characterArray.length === 1) {
		return 1
	}

	let defaultArray = []

	let elemArray = [];

	for (let i = 0; i < characterArray.length; i++) {
		elemArray.push(characterArray[i]);

		for (let j = i + 1; j < characterArray.length; j++) {
			if (!elemArray.includes(characterArray[j])) {
				elemArray.push(characterArray[j]);
			} else if (elemArray.length > defaultArray.length) {
				console.log(elemArray)
				defaultArray = [...elemArray];
				elemArray = [];
				break;
			} else {
				console.log(elemArray)
				elemArray = [];
				break;
			}

			if (j === characterArray.length - 1) {
				if (elemArray.length > defaultArray.length) {
					console.log(elemArray)
					defaultArray = [...elemArray];
					elemArray = [];
				} else {
					console.log(elemArray)
					elemArray = [];
				}
			}
		}
	}

	return defaultArray.length;
}

const s = ' ';

console.log(lengthOfLongestSubstring(s))

