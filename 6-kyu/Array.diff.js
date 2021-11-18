// https://www.codewars.com/kata/523f5d21c841566fde000009
const arrayDiff = (a, b) => {
	const result = [];
	a.forEach(element => {
		if (!b.includes(element)) {
			result.push(element);
		}
	});
	return result;
};
