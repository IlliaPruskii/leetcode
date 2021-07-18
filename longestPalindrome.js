const longestPalindrome = (s) => {
	const elemArray = Array.from(s);

	let firstLastElemNumber = [0, 0];
	let maxLength = 0;

	for (let k = 0; k < elemArray.length; k++) {
		for (let i = elemArray.length - 1; i > k; i--) {
			if (elemArray[k] === elemArray[i]) {
				const mediumValue = Math.floor(( i - k ) / 2);

				for (let j = 0; j <= mediumValue; j++) {
					if (elemArray[k + j] !== elemArray[i - j]) {
						break;
					} else if (j === mediumValue) {
						const arrayLength = i - k
						if (arrayLength > maxLength) {
							maxLength = arrayLength;
							firstLastElemNumber[0] = k;
							firstLastElemNumber[1] = i;
						}
					}
				}

			}

		}
	}

	const palindromeArray = elemArray.slice(firstLastElemNumber[0], firstLastElemNumber[1] + 1);
	const palindromeString = palindromeArray.join('');

	return palindromeString;
}

const s = 'aaaa';

console.log(longestPalindrome(s));
