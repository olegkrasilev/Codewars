// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
function isAnagram(test, original) {
    function sortString(string) {
      if(typeof string !== 'string') throw new Error('Wrong input')
      return string.toLowerCase().split('').sort().join('');
    }

  
    return sortString(test) === sortString(original)
};
