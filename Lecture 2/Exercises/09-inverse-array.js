/**
 * 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
 */

let arr = [1, -2, 3, -4];

let result = [];

for (let i = 0; i < arr.length; i++) {
    result.push(-arr[i]);
}

console.log(result);