const zigZagConversion = (s, numRows) => {
	if (numRows === 1) return s;

	const elemArray = Array.from(s);
	const matrix = [];

	// const matrix = Array(numRows).fill([]);
	for (let i = 0; i < numRows; i++) {
		matrix.push([])
	}
	//
	// console.log(matrix)
	// console.log(fff)

	const loopAmount = elemArray.length / ( numRows + numRows - 2 ) * ( numRows - 1 );


	for (let i = 0; i < loopAmount; i++) {
		if (elemArray.length === 0) {
		} else if (i === 0 || i % ( numRows - 1 ) === 0) {
			for (let j = 0; j < numRows; j++) {
				const elem = elemArray.shift();
				matrix[j].push(elem);
			}
		} else {
			for (let j = 0; j < numRows; j++) {
				if (i % ( numRows - 1 ) === numRows - 1 - j) {
					const elem = elemArray.shift();
					matrix[j].push(elem);
				} else {
					matrix[j].push('');
				}
			}
		}
	}

	let outputArray = [];

	for (let i = 0; i < matrix.length; i++) {
		outputArray = [...outputArray, ...matrix[i]]
	}

	return outputArray.join('');
}

const s = 'PAYPALISHIRING';
const numRows = 4;

console.log(zigZagConversion(s, numRows));
