/**
 * 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
 */
function countdown(sec) {
  let timer = 500;
  let interval = setInterval(() => {
    console.log(sec--);
    if (sec < 0) {
      clearInterval(interval);
    }
  }, timer);
}

countdown(10);

/**
 * 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
 */

/* გადაცემულ პარამეტს ერთდროულად ვიყენებ, როგორც
  target number-ს და random range-ს */
function randomGenerator(num) {
  let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * num) + 1;
    console.log(randomNum);
    if (num === randomNum) {
      console.log(`Match: ${num}`);
      clearInterval(interval);
    }
  }, 500);
}

randomGenerator(10);

/**
 * 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
 */
function checkNumber(n, callback) {
  if (n > 27) callback(n);
  else console.log(`${n} is less than 27`);
}

function showMessage(n) {
  console.log(`${n} is greater than 27`);
}

checkNumber(17, showMessage);

/**
 * 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
 */
// async/await
async function fetchUsers(API) {
  let res = await fetch(API);
  let data = await res.json();
  let someUsers = data.slice(0, 4);
  return someUsers;
}

async function getData() {
  let API = "https://jsonplaceholder.typicode.com/users";
  let fetchedUsers = await fetchUsers(API);
  console.log(fetchedUsers);
}

getData();

// then/catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.slice(0, 4));
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
 */

let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 5 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 8 },
];

let groupedPeople = people.reduce(
  (acc, cur) => {
    if (cur.age > 10) acc.moreThan20.push(cur);
    else acc.lessOrEqual20.push(cur);
    return acc;
  },
  {
    moreThan20: [],
    lessOrEqual20: [],
  },
);

console.log(groupedPeople);

/**
 * 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
 */
function compareNumbers(n, m, callback) {
  if (n > m) {
    callback(n, m);
  } else console.log(`${n} is less than or equal to ${m}`);
}

function showMessage(n, m) {
  console.log(`${n} is greater than ${m}`);
}

compareNumbers(5, 7, showMessage);

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
