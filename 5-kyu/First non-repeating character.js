// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  let result;
  const lowerCaseArr = s.split("").map((item) => item.toLowerCase());
  lowerCaseArr.forEach((letter, index, array) => {
    const filteredArr = array.filter((item) => {
      return item === letter;
    });

    if (filteredArr.length < 2 && typeof result === "undefined") {
      result = letter;
    }
  });

  if (result && s.includes(result.toUpperCase())) {
    result = result.toUpperCase();
  }

  if (typeof result === "undefined") {
    result = "";
  }

  return result;
}
