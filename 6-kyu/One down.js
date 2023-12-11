// A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

// Rather than spending hours trying to find the bug itself, you decide to try and decode it.

// If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.

function oneDown(str) {
  if (typeof str !== "string") {
    return "Input is not a string";
  }

  const specialChars = [":", ".", ";", ","];
  const result = str
    .split("")
    .map((letter) => {
      if (letter === " " || specialChars.includes(letter)) {
        return letter;
      } else if (letter === "a") {
        return "Z";
      } else if (letter === "A") {
        return "z";
      } else {
        return String.fromCharCode(letter.charCodeAt() - 1);
      }
    })
    .join("");

  return result;
}
