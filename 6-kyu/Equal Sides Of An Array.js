// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
    const totalSum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
      
        if (2 * leftSum === totalSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}
