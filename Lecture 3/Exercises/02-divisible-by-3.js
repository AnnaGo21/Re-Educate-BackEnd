/**
 * 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
 */

let arr = [1, 2, 3, 4, 5, 6, 9];
let filteredArr = arr.filter((cur) => cur % 3 === 0);

console.log(filteredArr);
