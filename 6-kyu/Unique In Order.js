// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function(iterable){
  let result;
  let cbFn = (item,index,array) => {
      const currentItem = item;
      const nextItem = array[index + 1];

      if(currentItem !== nextItem) {
        return currentItem
      }
    }

  if(typeof iterable === 'string') {
  result = iterable.split('').map(cbFn)

  }

  if(Array.isArray(iterable)) {
  result = iterable.map(cbFn)

  }

  return  result = result.filter(item => item)
}