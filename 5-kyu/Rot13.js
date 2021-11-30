// https://www.codewars.com/kata/530e15517bc88ac656000716
const rot13 = message => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const rot13key = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");
  const strToArr = message.split("");
  const result = [];

  strToArr.forEach(element => {
    const indexOfLetter = letters.indexOf(element);
    if (indexOfLetter < 0) {
      result.push(element);
      return;
    }
    result.push(rot13key[indexOfLetter]);
  });

  return result.join("");
};
