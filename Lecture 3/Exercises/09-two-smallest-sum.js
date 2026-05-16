/**
 * 9) დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
 */

let arr = [-1, 20, 90, 4, 5, 111];
let sortedArr = arr.sort((a, b) => a - b);
let minsSum = sortedArr[0] + sortedArr[1];
// ან
let minsSum1 = arr[0] + arr[1]; // რადგან sort მეთოდი პირვანდელ მასივსაც ცვლის
console.log(minsSum);
console.log(minsSum1);

// პირვანდელი მასივის ცვლილების თავიდან ასარიდებლად
// კოპიო ვერსიის შექმნა
let array = [-1, 20, 90, 4, 5, 111];
let sortedArray = [...array].sort((a, b) => a - b);
//ან toSorted() მეთოდის გამოყენება, რომელიც იგივეა რაც sort() თუმცა ქმნის ახალ მასივს
let sortedArray1 = arr.toSorted((a, b) => a - b);
console.log(array);
console.log(sortedArr);
