const palindromeNumber = (x) => {
	const stringNumber = x.toString()
	const characterNumberArray = Array.from(stringNumber).reverse();
	const palindromeNumber = characterNumberArray.join('');

	return palindromeNumber === x.toString();
}

const x = -101;
console.log(palindromeNumber(x));
