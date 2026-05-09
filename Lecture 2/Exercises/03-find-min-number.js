/**
 * 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
 */

let nums = [100, 2, 3, 9, 50, 30];

let min = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
}

console.log(min);