// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  const map = new Map();

  for (let index = 0; index < arr.length; index++) {
    const number = arr[index];
    const count = map.get(number) || 0;
    map.set(number, count + 1);
  }

  const uniqueNumber = Array.from(map.entries())
    .filter(([key, value]) => {
      return value === 1;
    })
    .map(([key, value]) => key)[0];

  return uniqueNumber;
}
