// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]


function towerBuilder(floors) {
  const tower = [];

  for (let i = 1; i <= floors; i++) {
    let spaces = ' '.repeat(floors - i);
    let blocks = '*'.repeat(i * 2 - 1);
    let floor = spaces + blocks + spaces;
    tower.push(floor);
  }

  return tower;
}
