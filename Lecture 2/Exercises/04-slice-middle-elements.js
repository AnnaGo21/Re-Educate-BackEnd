/**
 * 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
 */

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.slice(2, 5));

let middle = Math.floor(arr.length / 2); // იმ შემთხვევაში თუკი არ ვიცით რამდენი ელემენტია მასივში
let result = arr.slice(middle - 1, middle + 2);

console.log(result);