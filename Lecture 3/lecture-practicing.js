// // 1) filter - არ ცვლის ორიგინალ მასივს
// let arr = [-1, 1, 2, 3, 4, 5]

// let filteredArr = arr.filter((num) => num > 2)
// console.log(arr)
// filteredArr = arr.filter((num) => num < 2)

// console.log(filteredArr)

// // 2) map - არც ეს არ ცვლის ორიგინალ მასივს
//  როცა გვინდა არა მხოლოდ შედარება და გაფილტვრა, არამედ რაღაც ახალი მნიშვნელობის მიღება
// let numsArr = [1, 2, 3, 4];

// let mappedArray = numsArr.map((el) => el * 2);

// console.log(mappedArray);

// // ამ ორის გაერთიანება
// let resultArray = numsArr.filter((num) => num > 2).map((num) => num * 10)
// console.log(resultArray)

// //3) find/findIndex
// let arr = [1,2,3,40]
// let findedArr = arr.find((el) => el === 40)
// console.log(findedArr)

// let index = arr.findIndex((el) => el === 40)
// console.log(index)

// 5) some / every

// let numsArr = [1,1,2,3,4,5,6,6,19,90]

// let sommedArr = numsArr.some((el) => el > 2)
// console.log(sommedArr)

// let every = numsArr.every((el) => el > 2)
// console.log(every)

// // 6) sort - ორიგინალ მასივს ცვლის
// let arr = [3, 1, 10, 2];
// // ამიტომ თუ გვინდა ორიგინალი შევინარჩუნოთ უბრალოდ კოპიოს გაკეთება შეგვიძლია
// let sortedArray = [...arr].sort((a,b) => a-b);
// console.log(arr);

// console.log(arr.sort((a, b) => a-b)); //ზრდადობისთვის
// console.log(arr.sort((a,b) => b-a)); //კლებადობისთვის

// 7) reduce - It takes all elements and reduces them into one final value.
// I - Accumulating numbers
let arr = [1, 2, 3, 4];
let sumArr = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sumArr);

// II - Multiply numbers
let multiplied = arr.reduce((acc, cur) => acc * cur, 1);
console.log(multiplied);

// III - Find Maximum Number
let maxNum = arr.reduce((more, cur) => {
  if (more > cur) {
    return more;
  } else return cur;
}, arr[0]);

console.log(maxNum);
