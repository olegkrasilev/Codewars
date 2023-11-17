// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const oddNumbersArr = array
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);
  const withoutOddNumbers = array.map((item) => {
    if (item % 2 === 0) return item;
  });

  let oddNumbersIndex = -1;
  const result = withoutOddNumbers.map((item) => {
    if (typeof item !== "undefined") {
      return item;
    }

    oddNumbersIndex++;
    return oddNumbersArr[oddNumbersIndex];
  });

  return result;
}
