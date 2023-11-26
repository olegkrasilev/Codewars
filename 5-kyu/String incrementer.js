// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  if (!/\d/.test(string)) {
    return string + "1";
  }

  if (/^\d+$/.test(string)) {
    const num = parseInt(string, 10) + 1;
    return num.toString().padStart(string.length, "0");
  }

  const array = string.split("");
  let result = [];

  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    const number = parseInt(element);

    if (!Number.isNaN(number)) {
      result.unshift(element);
      continue;
    }

    break;
  }

  const initialStrWithoutNumbers = string.slice(
    0,
    string.length - result.length
  );
  result = result.join("");
  const num = parseInt(result, 10) + 1;
  const incrementedStr = num.toString().padStart(result.length, "0");
  const finalResult = initialStrWithoutNumbers + incrementedStr;

  return finalResult;
}
