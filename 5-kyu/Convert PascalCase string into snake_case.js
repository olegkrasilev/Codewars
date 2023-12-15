// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
// Examples

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
  if (typeof string === "number") {
    return String(string);
  }

  if (string === "") {
    return "";
  }

  const words = string.split(/(?=[A-Z])/);

  function lowerCaseFirstLetter(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }

  return words.map(lowerCaseFirstLetter).join("_");
}
