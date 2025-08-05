// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const outer = numbers[i];

    for (let j = 1; j < numbers.length; j++) {
      const inner = numbers[j];

      if ((outer + inner) === target) {
        return [i, j]
      }
    }
  }
}
