const longestCommonPrefix = (strs) => {
	let prefix = '';

	let i = 0;

	loop1:
	while (true) {
		const letter = strs[0][i]

		for (let j = 0; j < strs.length; j++) {

			if (!strs[j][i] || letter !== strs[j][i]) {
				break loop1;
			}
		}

		prefix += letter
		i++
	}

	return prefix;
}

const strs = [""];
console.log(longestCommonPrefix(strs));
