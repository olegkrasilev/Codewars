// In this kata, you must define the Array.reduce method.

// I have disabled the pre-existing reduce methods.

// Here's how it works:

// [1,2,3].reduce( function(sum, next){return sum+next}, 0)
// // => 6

// ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// // => {'a':2, 'b':1}

// Summary: The reduce method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome. On the first iteration, it should pass the initial value to the function, as well as the first element of the array. If no initial value is passed, skip to the first element of the array.

// Ruby methods should expect a lambda.

Array.prototype.reduce = function (callback, initialValue) {
  let result = initialValue;
  let index = 0;
  if (initialValue === undefined && this.length > 0) {
    result = this[0];
    index++;
  }
  for (; index < this.length; index++) {
    result = callback(result, this[index]);
  }

  return result;
};
