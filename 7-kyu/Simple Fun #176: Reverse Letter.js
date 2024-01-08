// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function removeNonAlphanumeric(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      result += str[i];
    }
  }
  return result;
}

function reverseLetter(str) {
  const string = removeNonAlphanumeric(str);

  return string.split("").reverse().join("");
}
