/**
 * 8)დაალაგე ზრდადობით და შეკრიბე ფასი
 */

const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];

phones.sort((a, b) => a.price - b.price);
let sumPrice = phones.reduce((acc, cur) => acc + cur.price, 0);
console.log(sumPrice);
