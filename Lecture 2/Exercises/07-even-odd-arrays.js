/**
 * 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
 */

let arr = [1, 2, 3, 4, 5, 6, 7];

let odds = [];
let evens = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evens.push(arr[i]);
    } else {
        odds.push(arr[i]);
    }
}

console.log("Even numbers: ", evens);
console.log("Odd numbers: ", odds);