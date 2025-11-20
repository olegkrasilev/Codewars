// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(arrayA, arrayB) {
  if (arrayA?.length !== arrayB?.length) {
    return false;
  }

  const aSquaredSorted = arrayA.map((element) => {
    return Math.pow(element, 2);
  }).sort((a, b) => a - b);
  
  const bSorted = arrayB.sort((a, b) => a - b);
  
  return aSquaredSorted.toString() === bSorted.toString();
}
