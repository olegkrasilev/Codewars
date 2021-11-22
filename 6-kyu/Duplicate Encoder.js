// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
const duplicateEncode = word => {
	const arr = word.toLowerCase().split('');
	const set = new Set(arr);
	if (set.size === arr.length) {
		return arr.map(item => item = '(').join('');
	}
	const singleCharacters = [];
	set.forEach(item => {
		if (arr.filter(letter => letter === item).length === 1) {
			singleCharacters.push(item);
		}
	});
	return arr.map(item => {
		if (singleCharacters.includes(item)) {
			return item = '(';
		}
		return	item = ')';
	}).join('');
};
