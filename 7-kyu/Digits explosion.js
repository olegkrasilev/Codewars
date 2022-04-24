// https://www.codewars.com/kata/585b1fafe08bae9988000314

const explode = (s) => {
  let result = s;

  if (s.includes('0')) {
    result = result.replace(/0/g, '');
  }

  if (s.includes('2')) {
    result = result.replace(/2/g, '22');
  }

  if (s.includes('3')) {
    result = result.replace(/3/g, '333');
  }

  if (s.includes('4')) {
    result = result.replace(/4/g, '4444');
  }

  if (s.includes('5')) {
    result = result.replace(/5/g, '55555');
  }

  if (s.includes('6')) {
    result = result.replace(/6/g, '666666');
  }

  if (s.includes('7')) {
    result = result.replace(/7/g, '7777777');
  }

  if (s.includes('8')) {
    result = result.replace(/8/g, '88888888');
  }

  if (s.includes('9')) {
    result = result.replace(/9/g, '999999999');
  }

  return result;
};
