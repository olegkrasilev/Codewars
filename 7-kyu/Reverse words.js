// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let splittedStr = str.split(" ");

  splittedStr = splittedStr.map((word) => {
    if (word.length > 1) {
      return word.split("").reverse().join("");
    }

    return word;
  });

  return splittedStr.join(" ");
}
