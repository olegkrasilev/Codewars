// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

// For example:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call

// Different loopers should not affect each other, so be wary of unmanaged global state.

function makeLooper(str) {
  let counter = -1;
  return () => {
    counter++;
    return str[counter] !== undefined
      ? str[counter]
      : ((counter = 0), str[counter]);
  };
}
