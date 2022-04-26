// https://www.codewars.com/kata/52449b062fb80683ec000024
const generateHashtag = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  const stringIntoArray = str.split(' ');
  const hashTag = '#';
  const result = stringIntoArray.reduce((a, b) => {
    const firstLetterToUpperCase = b.charAt(0).toUpperCase() + b.slice(1);

    return a + firstLetterToUpperCase;
  }, hashTag);

  if (result.length > 140) {
    return false;
  }

  return result;
};
