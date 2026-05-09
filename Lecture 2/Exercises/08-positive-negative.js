/**
 * 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
    let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
 */

let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];

let positiveCount = 0;
let negativeSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveCount++;
    } else if (arr[i] < 0) {
        negativeSum += arr[i];
    }
}

console.log("Positive numbers count:", positiveCount);
console.log("Negative numbers sum:", negativeSum);