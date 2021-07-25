const reverseInteger = (x) => {
	const positiveNumber = Math.abs(x);

	const elemArray = Array.from(positiveNumber.toString());

	const reverseArray = elemArray.reverse();

	let outputNumber = Number(reverseArray.join(''));

	if (x < 0) {
		outputNumber *= -1;
	}

	if (outputNumber >= 2 ** 31 - 1 || outputNumber <= (-2) ** 31) return 0;

	return outputNumber;
}

const x = 120;

console.log(reverseInteger(x));

