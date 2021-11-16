// https://www.codewars.com/kata/5264d2b162488dc400000001
const spinWords = string => {
	if (string.length < 5) {
		return string;
	}
	let arrayOfString = string.split(' ');
	if (arrayOfString.length === 1) {
		return string.split('').reverse().join('');
	}
	arrayOfString = arrayOfString.map(item => {
		if (item.length >= 5) {
			return Array.from(item).reverse().join('');
		}
		return item;
	});
	return arrayOfString.join(' ');
};
