// https://www.codewars.com/kata/58235a167a8cb37e1a0000db
const numberOfPairs = (gloves) => {
  const uniqueGloves = [...new Set(gloves)];
  let result = 0;

  uniqueGloves.forEach(uniqueGlove => {
    const count = Math.floor(gloves.filter(item => item === uniqueGlove).length / 2);

    result += count;
  });

  return result;
};
