// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

//     1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
//     2008 is written as 2000=MM, 8=VIII; or MMVIII
//     1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
// Examples

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1

// Help

// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

class RomanNumerals {
  static toRoman(number) {
    let romanNum = "";
    let initialNumber = number;
    const romanNumbers = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };

    (function calculate() {
      const entries = Object.entries(romanNumbers);
      for (let index = entries.length - 1; -1 < index; index--) {
        let [numEquivalent, romanEquivalent] = entries[index];
        numEquivalent = Number(numEquivalent);

        while (initialNumber >= numEquivalent) {
          initialNumber -= numEquivalent;
          romanNum += romanEquivalent;
        }
      }
    })();

    return romanNum;
  }

  static fromRoman(str) {
    const romanNumbers = {
      I: 1,
      IV: 4,
      IX: 9,
      X: 10,
      XL: 40,
      XC: 90,
      CD: 400,
      V: 5,
      L: 50,
      C: 100,
      D: 500,
      CM: 900,
      M: 1000,
    };

    const result = [];
    const array = str.split("");

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const nextElement = array[index + 1];

      if (romanNumbers[element + nextElement]) {
        result.push(romanNumbers[element + nextElement]);
        index++;
        continue;
      }

      if (romanNumbers[element]) {
        result.push(romanNumbers[element]);
      }
    }

    return result.reduce((a, b) => a + b, 0);
  }
}
