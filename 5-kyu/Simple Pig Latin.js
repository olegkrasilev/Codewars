// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = str => {
  const arrayOfString = str.split(' ');
  const result = [];
  for (const i of arrayOfString) {
    if (i === '?' || i === '!') {
      result.push(i);
      continue;
    }
    result.push(`${i.slice(1, i.length) + i.slice(0, 1)}ay`);
  }
  return result.join(' ');
};
