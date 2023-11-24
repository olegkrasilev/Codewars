// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
  if (string.length === 0) {
    return {};
  }

  const arrOfStr = string.split("");
  const map = new Map();

  arrOfStr.forEach((letter) => {
    const occurence = map.get(letter) ? map.get(letter) : 0;
    map.set(letter, letter ? occurence + 1 : 0);
  });

  return Object.fromEntries(map.entries());
}
