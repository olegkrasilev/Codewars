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
