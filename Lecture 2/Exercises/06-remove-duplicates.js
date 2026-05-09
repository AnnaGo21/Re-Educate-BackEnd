/**
 * 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
 */

let arr = [1, 2, 3, 4, 5, 6, 6, 7, 7];

// Set-ის გამოყენებით
let clearedArr = [...new Set(arr)]; // ასე იმიტომ რომ ორიგინალი array უცვლელი დაგვეტოვებინა
console.log(clearedArr);

// ხელით შემოწმება უკვე არსებობს თუ არა ესა თუ ის ელემენტი
let resultArr = [];

for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];
    if (!resultArr.includes(currentElem)) {
        resultArr.push(currentElem);
    }
}

console.log(resultArr);