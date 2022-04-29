// https://www.codewars.com/kata/5b16490986b6d336c900007d
const myLanguages = results => {
  const solution = [];
  const entries = Object.entries(results);
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  sorted.forEach(item => {
    const score = item[1];
    const language = item[0];

    if (score >= 60) {
      solution.push(language);
    }
  });

  return solution;
  }
