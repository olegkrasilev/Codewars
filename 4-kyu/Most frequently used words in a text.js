// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Assumptions:

//     A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
//     Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
//     Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
//     Matches should be case-insensitive, and the words in the result should be lowercased.
//     Ties may be broken arbitrarily.
//     If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// Examples:

// "In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income."

// --> ["a", "of", "on"]

// "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// --> ["e", "ddd", "aa"]

// "  //wont won't won't"

// --> ["won't", "wont"]

function topThreeWords(text) {
  let textSingleWhiteSpace = text
    .toLowerCase()
    .replace(/[^a-z ']/g, " ")
    .replace(/ +/g, " ")
    .trim();
  const map = new Map();
  const arrOfWords = textSingleWhiteSpace.split(" ");

  for (let index = 0; index < arrOfWords.length; index++) {
    const word = arrOfWords[index];
    if (word === "'") continue;

    if (map.has(word)) {
      let key = map.get(word);
      map.set(word, key + 1);
      continue;
    }

    map.set(word, 1);
  }

  const mostUsedWordsAsc = Array.from(map).sort(function (a, b) {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }

    if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    }
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1;
    }

    return 0;
  });

  const withoutEmptyStr = mostUsedWordsAsc.filter(([word, count]) => word);

  const [first, second, third] = withoutEmptyStr;
  if (first && second && third) {
    return [first[0], second[0], third[0]];
  }
  if (first && second) {
    return [first[0], second[0]];
  }

  const regExp = /[a-zA-Z]/g;
  if (first && regExp.test(first[0])) {
    return [first[0]];
  }

  return [];
}
