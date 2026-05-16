/**
 * 3) დააბრუნე ყველა დადებითი რიცხვის ჯამი
 */

let arr = [1, -2, 3, 4, -5, 6];

let sumOfPositives = arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
console.log(sumOfPositives);
