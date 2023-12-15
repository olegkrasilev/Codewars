// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  let string = s;

  for (let index = 0; index < string.length; index++) {
    const currentElement = string[index];
    const nextElement = string[index + 1];

    if (currentElement === "#") {
      string = string.replace("#", "");
      index = -1;
      continue;
    }

    if (nextElement === "#") {
      string = string.replace(currentElement + nextElement, "");
      index = -1;
    }
  }

  return string;
}
