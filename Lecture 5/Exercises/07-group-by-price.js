/**
 * 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
    ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
 */

let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];

let groupedProducts = products.reduce(
  (acc, cur) => {
    cur.price > 20
      ? acc.moreThan20.push(cur.price)
      : acc.lessOrEqual20.push(cur);
    return acc;
  },
  {
    moreThan20: [],
    lessOrEqual20: [],
  },
);

console.log(groupedProducts);
