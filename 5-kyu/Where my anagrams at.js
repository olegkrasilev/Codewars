// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
const anagrams = (word, words) => words.filter(item => {
	if (item.split('').sort().join('') === word.split('').sort().join('')) {
		return item;
	}
});
