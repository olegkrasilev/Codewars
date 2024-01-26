// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

function snail(arr) {
  const result = [];
  function firstStep() {
    result.push(...arr[0]);
    arr.splice(0, 1);
  }
  function secondStep() {
    for (let i = 0; i < arr.length; i++) {
      const innerArr = arr[i];
      result.push(innerArr[arr.length]);
      innerArr.splice(arr.length, arr.length);
    }
  }
  function thirdStep() {
    const reverseArr = arr[arr.length - 1];
    reverseArr.reverse();
    result.push(...reverseArr);

    arr.splice(arr.length - 1);
  }

  function fourthStep() {
    for (let i = arr.length - 1; i >= 0; i--) {
      const innerArr = arr[i];

      result.push(innerArr[0]);
      innerArr.splice(0, 1);
    }
  }

  while (arr.length !== 0) {
    firstStep();
    if (arr.length === 0) {
      break;
    }
    secondStep();

    if (arr.length === 0) {
      break;
    }
    thirdStep();

    if (arr.length === 0) {
      break;
    }
    fourthStep();
  }
  return result;
}
