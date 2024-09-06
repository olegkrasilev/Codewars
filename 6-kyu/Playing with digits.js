// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

function digPow(number, powerStart) {
  const digitsArray = number.toString().split('').map((digitString) => Number(digitString));
  let currentPower = powerStart - 1;

  const poweredDigits = digitsArray.map((digit) => {
    currentPower++;
    return digit ** currentPower;
  });

  const totalSum = poweredDigits.reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  const quotient = totalSum / number;

  if (Number.isInteger(quotient)) {
    return quotient;
  }
  return -1;
}
