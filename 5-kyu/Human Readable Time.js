// https://www.codewars.com/kata/52685f7382004e774f0001f7
// A quick but costly performance solution
const humanReadable = seconds => {
  let hours = 0;
	let minutes = 0;
	let second = 0;
	const numToDateString = number => {
		if (number < 10) {
			return `0${String(number).slice(-2)}`;
		}
		return String(number).slice(-2);
	};
	for (let index = 0; index < seconds; index++) {
		second++;
		if (second === 60) {
			minutes += 1;
			second = 0;
		}
		if (minutes === 59 && second === 60) {
			hours += 1;
			minutes = 0;
			second = 0;
		}
		if (minutes === 60) {
			hours += 1;
			minutes = 0;
		}
	}
	return `${numToDateString(hours)}:${numToDateString(minutes)}:${numToDateString(second)}`;
};
