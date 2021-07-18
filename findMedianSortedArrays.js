const findMedianSortedArrays = (nums1, nums2) => {
	const numberArray = [ ...nums1, ...nums2 ];

	numberArray.sort(function(a, b){return a-b});

	const elemAmount = numberArray.length;

	if ( elemAmount % 2 !== 0 ) {
		const medianElemNumber = Math.floor(elemAmount / 2);

		return numberArray[medianElemNumber]
	} else {
		const medianElemNumber = elemAmount / 2;

		const mediumValue = ( numberArray[medianElemNumber] + numberArray[medianElemNumber - 1] ) / 2;

		return mediumValue;
	}

}

const nums1 = [1,3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2))


