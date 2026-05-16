/**
 * 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
 */

let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];

// Using Set
let unique = [...new Set(arr)];
console.log(unique);

// Using reduce
let uniqueArr = arr.reduce(
  (acc, cur) => (!acc.includes(cur) ? acc.concat(cur) : acc),
  [],
);
console.log(unique);
