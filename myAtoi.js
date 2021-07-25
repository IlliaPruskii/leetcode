const myAtoi = (s) => {
	const stringWithoutWhitespace = s.trim();

	let characterArray = Array.from(stringWithoutWhitespace);

	const numberArray = [];

	if (characterArray[0] === '-' || characterArray[0] === '+') {
		numberArray.push(characterArray[0]);
		characterArray = characterArray.slice(1);
	}

	for (const character of characterArray) {
		if (!Number(character) && character !== '0') {
			break;
		} else {
			numberArray.push(character);
		}
	}

	const outputNumber = Number(numberArray.join(''));

	if (!outputNumber) {
		return 0;
	}

	if (outputNumber > 2**31 - 1) {
		return 2**31 - 1
	} else if (outputNumber < (-2)**31) {
		return (-2)**31
	}

	return outputNumber;
}

const s = '  0000000000012345678';

console.log(myAtoi(s))
