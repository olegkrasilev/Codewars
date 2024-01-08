// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  let array = num.toString().split("");
  const result = [];

  if (array[0] === "-") {
    array = array.slice(1);
  }

  for (let index = 0; index < array.length; index++) {
    const currentElement = array[index];
    const prevElement = array[index - 1];

    if (index === 0) {
      result.push(currentElement);
      continue;
    }

    if (currentElement % 2 !== 0) {
      result.push("-" + currentElement);
      continue;
    }

    if (currentElement % 2 === 0 && prevElement % 2 !== 0) {
      result.push("-" + currentElement);
      continue;
    }

    if (currentElement % 2 === 0) {
      result.push(currentElement);
    }
  }

  return result.join("");
}
