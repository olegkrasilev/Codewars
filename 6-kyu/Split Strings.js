// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  const splittedArr = str.split("");
  const result = [];
  for (let index = 0; index < splittedArr.length; index++) {
    const element = splittedArr[index];
    let nextElement = splittedArr[index + 1];
    if (!nextElement) {
      nextElement = "_";
    }
    result.push(element + nextElement);
    index++;
  }

  return result;
}
