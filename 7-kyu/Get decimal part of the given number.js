// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.
// Examples

// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2

function getDecimal(n){
  if(!Number.isInteger(n)) {
    const arr = n.toString().split('.')

    return Number(`${0}.${arr[1]}`);
  }

  return Number(n.toString()[1])
}