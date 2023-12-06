// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function calculateWordValue(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetValues = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphabetValues[alphabet[i]] = i + 1;
  }

  return word.split("").reduce((value, letter) => {
    const letterValue = alphabetValues[letter] || 0;
    return value + letterValue;
  }, 0);
}

function high(x) {
  const words = x.split(" ");
  const wordValues = words.map((word) => calculateWordValue(word));
  const maxWordValue = Math.max(...wordValues);
  const maxWordIndex = wordValues.indexOf(maxWordValue);
  return words[maxWordIndex];
}
