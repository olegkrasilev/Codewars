// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  const isUpperCase = (string) => /^[A-Z]*$/.test(string);
  const result = string.split("").map((letter) => {
    if (isUpperCase(letter)) {
      return " " + letter;
    }

    return letter;
  });

  return result.join("");
}
