/**
 * 1) დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
 */
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
let sortedArr = arr.flat(Infinity).sort((a, b) => a - b);

let uniques = [];
for (let i = 0; i < sortedArr.length; i++) {
  if (!uniques.includes(sortedArr[i])) uniques.push(sortedArr[i]);
}
console.log(uniques);

/**
 * 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
 */
let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];
let resultProduct = products
  .filter((el) => el.price < 1000)
  .reduce((acc, cur) => (cur.rating > acc.rating ? cur : acc));
console.log(resultProduct);

/**
 * 3) რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერ გამეორებული
 */
let sentence = "dog cat dog bird cat dog fish bird";
let splittedSen = sentence.split(" ");
let grouped = splittedSen.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else acc[cur] = 1;
  return acc;
}, {});

let maxCount = 0;
let maxWord = "";
for (let word in grouped) {
  if (grouped[word] > maxCount) {
    maxCount = grouped[word];
    maxWord = word;
  }
}
console.log(`Maximum occurrence has ${maxWord} - ${maxCount} times`);
