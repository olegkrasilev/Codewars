// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
const getResult = string => {
	const result = string.split('');
	switch (result[1]) {
	case '+':
		return +result[0] + +result[2];
	case '-':
		return +result[0] - +result[2];
			case '*':
		return +result[0] * +result[2];
	case '/':
		return Math.floor(+result[0] / +result[2]);
	}
};

const zero = (result, number = 0) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const one = (result, number = 1) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const two = (result, number = 2) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const three = (result, number = 3) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const four = (result, number = 4) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const five = (result, number = 5) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const six = (result, number = 6) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const seven = (result, number = 7) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const eight = (result, number = 8) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};
const nine = (result, number = 9) => {
	return !result ? `${number}` : getResult(`${number}${result}`);
};

const plus = inputNum => `+${inputNum}`;
const minus = inputNum => `-${inputNum}`;
const times = inputNum => `*${inputNum}`;
const dividedBy = inputNum => `/${inputNum}`;
