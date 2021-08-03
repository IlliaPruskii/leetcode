const regularExpressionMatching = (s, p) => {
	let sArray = Array.from(s);
	let pArray = Array.from(p);

	const outputArray = [];

	while (pArray.length > 0 || sArray.length > 0) {
		if (sArray[0] === pArray[0] && pArray[1] === '*') {
			let characterAmount = 0;
			let i = 0;
			while (sArray[0] === sArray[i]) {
				characterAmount++;
				i++;
			}

			if (pArray[2] === sArray[0]) {
				pArray = pArray.slice(3);
			}

			outputArray.push(Array(characterAmount).fill(sArray[0]).join(''))
			sArray = sArray.slice(characterAmount);
			pArray = pArray.slice(2);
		} if (pArray[0] === '.' && pArray[1] === '*') {
			outputArray.push(sArray[0]);

			let characterAmount = 1;
			let i = 1;
			while (sArray[1] === sArray[i + 1]) {

				characterAmount++;
				i++;
			}

			outputArray.push(Array(characterAmount).fill(sArray[1]).join(''))
			sArray = sArray.slice(characterAmount);
			pArray = pArray.slice(2);
		} else if (sArray[0] === pArray[0] || pArray[0] === '.') {
			outputArray.push(sArray[0]);
			sArray = sArray.slice(1);
			pArray = pArray.slice(1);
		} else if (pArray[1] === '*') {
			pArray = pArray.slice(2);
		} else {
			break;
		}
	}

	console.log(pArray)

	if (pArray.length !== 0) {
		return false
	}

	return outputArray.join('') === s;
};

const s = 'aaa';
const p = 'a*a';

console.log(regularExpressionMatching(s, p));
