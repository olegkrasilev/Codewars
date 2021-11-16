// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
const duplicateCount = text => {
	let count = 0;
	const stringToArray = text.toLowerCase().split('');
	const removeDuplicates = new Set(stringToArray);
	if (removeDuplicates.size === stringToArray.length) {
		return 0;
	}
	removeDuplicates.forEach(item => {
		const strRegEx = `[${item}]`;
		const newRegEx = new RegExp(strRegEx, 'gm');
		const numberOfDuplicate = text.toLowerCase().match(newRegEx);
		if (numberOfDuplicate.length > 1) {
			count += 1;
		}
	});
	return count;
};
