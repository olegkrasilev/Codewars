// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr) {
  return arr
    .map((number) => {
      const isUniquie = arr.filter((item) => {
        return number === item;
      }).length;

      if (isUniquie === 1) {
        return number;
      }

      return 0;
    })
    .reduce((a, b) => a + b, 0);
}
