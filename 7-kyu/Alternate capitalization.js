// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(string) {
  let evenCap = "";
  let oddCap = "";

  for (let index = 0; index < string.length; index++) {
    if (index % 2 === 0) {
      evenCap += string[index].toUpperCase();
      oddCap += string[index].toLowerCase();
    } else {
      evenCap += string[index].toLowerCase();
      oddCap += string[index].toUpperCase();
    }
  }

  return [evenCap, oddCap];
}
