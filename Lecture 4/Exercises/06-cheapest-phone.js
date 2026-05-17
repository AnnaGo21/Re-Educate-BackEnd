/**
 * 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
 */

const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];

let cheapestPhone = phones.reduce((acc, cur) => {
  return cur.price < acc.price ? cur : acc;
});
console.log(cheapestPhone.model);
