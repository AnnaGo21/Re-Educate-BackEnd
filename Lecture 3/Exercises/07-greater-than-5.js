/**
 * 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
 */

let arr = [1, 2, 3, 4, 5];
let resultArr = arr.map((cur) => cur * 2).filter((cur) => cur > 5);
console.log(resultArr);
