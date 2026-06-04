/**
 * 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი
 */
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`Sum ${sum}`);

/**
 * 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით
 */
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniques = [...new Set(arr)];
console.log(uniques);

/**
 * 3. იპოვე სტუდენტი სახელად ნიკა
 */
let students = [
  { name: "Giorgi", age: 20 },
  { name: "Nika", age: 22 },
  { name: "Ana", age: 19 },
];
let foundName = students.find((el) => el.name === "Nika");
console.log(foundName);

/**
 * 4. დაალაგე სტუდენტები ასაკის მიხედვით
 */
let people = [
  { name: "Gio", age: 30 },
  { name: "Luka", age: 25 },
  { name: "Ana", age: 28 },
];
let sortedByAge = people.sort((a, b) => a.age - b.age);
console.log(sortedByAge);

/**
 * 5. შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით დათვალო თითოეული ხილი რამდენჯერ მეორდება
 */
let sentence = "apple orange apple banana apple orange kiwi";
let fruitArray = sentence.split(" ").reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(fruitArray);

/**
 * 6. დაალაგე ზრდის მიხედვით და დათვალე ჯამი
 */
let nestedArray = [[1, [12, 46], 4, 5, 6, 7]];
let sortedArray = nestedArray.flat(Infinity).sort((a, b) => a - b);
let sumOfArray = sortedArray.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfArray);

/**
 *  7. ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]
 */
let someNums = [1, 20, 90, 100, 3, 3];
// ძველი რომ გადავაკეთოთ
someNums.fill(1);
console.log(someNums);

// ძველი რომ ხელუხლებელი დარჩეს
let mapped = someNums.map((num) => 1);
console.log(mapped);

/**
 * 8. შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად
 */
let text = "I love JavaScript and I love coding in JavaScript JavaScript";
