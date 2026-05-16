/**
 * 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
    let namesArr = ["giorgi","nika","mariami"]
 */

let namesArr = ["giorgi", "nika", "mariami"];
let removedCharArr = namesArr.map((name) => name.slice(0, -1));
console.log(removedCharArr);
