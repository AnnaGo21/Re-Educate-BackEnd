// 1)რა განსხვავებაა let, const შორის?
/**
 * ორივე ელემენტის მნიშვნელობის განმსაზღვრელია, თუმცა let-ით ცვლადის მნიშვნელობის შეცვლა შეიძლება, ხოლო const-ს ერთადერთი
 * მნიშვნელობა ენიჭება და მისი შეცვლა აღარ შეიძლება;
 * თუმცაღა ეს შეზღუდვა არ ეხება ობიექტს ან/და მასივს. მაგ:
 */
let min = 100;
min = 2; // reassign შეიძლება
console.log(min);

const subjects = ["Math"];
subjects.push("Geography");

console.log(subjects); // ორივეს დააკონსოლებს

// 2)რა განსხვავებაა primitive და nonprimitive type-ებს შორის?
/**
 * Primitive ტიპები ინახება მნიშვნელობით stack მეხსიერებაში, ხოლო Nonprimitive ტიპები reference (მისამართით) heap მეხსიერებაში.
 * პრიმიტიული ტიპები უცვლელია ანუ არიან immutable.
 * ესენია:
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * BigInt
 * Symbol
 *
 * მაგ:
 */
let name = "Giorgi";
let copy = name;
copy = "Nika";
console.log(name); // Giorgi დარჩება

/**
 * არაპრიმიტიულებია:
 * Object
 * Array
 * Function
 * მაგ:
 */
let user1 = {
  name: "Ana",
};
let user2 = user1;

user2.name = "Luka";

console.log(user1.name); // დაკონსოლდება ლუკა

// 3)რა განსხვავებაა == და === ოპერატორებს შორის?
/**
 * "==" ადარებს მნიშვნელობებს და საჭიროების შემთხვევაში ტიპებს გარდაქმნის
 * მაგ:
 * 5 == "5"; - true
 * false == 0; - true
 * null == undefined; - true
 */

/**
 * "===" კი ადარებს როგორც მნიშვნელობას, ისე ტიპს
 * 5 === "5"; - false
 * 5 === 5; - true
 * null === undefined; - false
 */

// 4)რა ტიპის არის null
console.log(typeof null);
/**
 * დაკონსოლდება ობიექტი, თუმცა რეალურად ეს JS-ის ბაგია, რომელსაც არ ასწორებენ,
 * რადგან უფრო მეტ ბაგს გამოიწვევს მისი გასწორება.
 * რეალურად კი null პრიმიტიული ტიპისაა.
 * */

// 5)რა განსხვავებაა funtion და = () => {} შორის
/**
 * function - საკუთარი this აქვს, hoisting ხდება
 * (ანუ სანამ მისი დეკლარაცია მოხდება ქვემოთ, მანამდეც შეიძლება გამოვიძახოთ ზემოთ)
 * მაგ:
 */
console.log(checkPalindrome("Abba"));
function checkPalindrome(str) {
  let cleanStr = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Arrow Function-ს:
    არ აქვს this
    არ გადაეცემა არგუმენტები
    არ შეიძლება new-თი გამოძახება
    მაგ:
 */
function countdown(sec) {
  let interval = setInterval(() => {
    console.log(sec--);
    if (sec < 0) clearInterval(interval);
  }, 500);
}

// 6)რას ნიშნავს callback function?
/**
 * Callback არის ფუნქცია, რომელსაც სხვა ფუნქციას გადავცემთ არგუმენტად და ის საჭირო დროს გამოიძახება.
 * მაგ:
 */
function checkNumber(n, callback) {
  if (n > 10) callback(n);
  else console.log(`${n} is less than 10`);
}

function showMessage(n) {
  console.log(`${n} is greater than 27`);
}

checkNumber(10, showMessage);

// 7)რა განსხვავებაა map, filter და reduce-ს შორის?
/**
 * map - ტრანსფორმირებას უკეთებს ყველა ელემენტს, შესაბამისად აბრუნებს იმავე სიგრძის მასივს
 * filter - ტოვებს მხოლოდ საჭირო (გაფილტრულ) ელემენტებს
 * reduce - მასივი ერთ შედეგამდე დაჰყავს
 */
const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.18);

const ages = [15, 22, 17, 30];
const adults = ages.filter((age) => age >= 18);

const total = prices.reduce((sum, price) => sum + price, 0);

// 8)რა არის Promise?
/**
 * ობიექტი, რომელიც ასინქრონული ოპერაციის შედეგს წარმოადგენს
 * აქვს სამი შესაძლო მდგომარეობა: pending, fullfilled, rejected
 */
let myPromise = new Promise((res, rej) => {
  rej("Rejected");
});
myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));

// 9)რა განსხვავებაა Promise.all, Promise.race და Promise.any-ს შორის?
/**
 * Promise.all()  - ელოდება ყველას. ერთი თუ დარექეთდება, ოპერაცია შეწყდება და ყველა დაფეილდება
 * Promise.race() - რომელიც request-ც დაასწრებს (resolve ან reject, სულერთია)
 * Promise.any()  - პირველივე და-resolve-ებული დაბრუნდება
 */
let p1 = new Promise((res, rej) => setTimeout(() => rej("error 1"), 2000));
let p2 = new Promise((res, rej) => setTimeout(() => res("success 2"), 1000));
let p3 = new Promise((res, rej) => setTimeout(() => res("success 3"), 3000));
let p4 = new Promise((res, rej) => setTimeout(() => rej("error 4"), 500));

Promise.any([p1, p2, p3, p4]).then((res) => console.log(res)); // success 2

Promise.race([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // error 4

async function fetchUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  let names = data.map((user) => user.name);
  return names[0];
}

async function fetchPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/postsssss");
  let data = await res.json();
  let posts = data.map((post) => post.title);
  return posts[0];
}

Promise.all([fetchUsers(), fetchPosts()])
  .then((res) => console.log("Success:", res))
  .catch((err) => console.log("Error occurred:", err));

Promise.any([fetchUsers(), fetchPosts()])
  .then((res) => console.log("Success:", res))
  .catch((err) => console.log("Error occurred:", err));

// 10)რას ნიშნავს async/await და რატომ ვიყენებთ?
/**
 * async: ვწერთ ფუნქციის წინ. ეს ნიშნავს, რომ ფუნქცია არის ასინქრონული და ყოველთვის დააბრუნებს Promise-ს.
 * await: ვწერთ async ფუნქციის შიგნით. ის აჩერებს ფუნქციის მუშაობას მანამ, სანამ Promise-ი არ დასრულდება და არ დაგვიბრუნებს პასუხს.
 *
 * ვიყენებთ:
 * კოდის უკეთ წასაკითხად
 * უკეთესად error handling-ებისთვის. ანუ try/catch ბლოკის გამოყენების შესაძლებლობა, ნაცვლად chaining catch()-ისა
 */
async function fetchData(API) {
  let res = await fetch(API); // ელოდება პასუხს
  let data = await res.json(); // ელოდება JSON-ის პარსინგს
  return data.slice(0, 4);
}

fetchData("https://jsonplaceholder.typicode.com/users").then((users) => {
  console.log("City:", users[0].address.city);
});

// 11)რა განსხვავებაა class-სა და object-ს შორის?
/**
 * კლასი ე.წ. blueprit-ია, გეგმა, მასში ბევრი ობიექტის, ფუნქციის შემქნა და თავმოყრა შეგვიძლია,
 * შემდეგ კი მათი გამოძახება სხვა კლასებსა თუ მეთოდებში. გვაძლევს კლასიფიკაციის და დაყოფის შესაძლებლობას,
 * ყველაფერი ერთ main კლასში რომ არ იყოს გაერთიანებული. მეხსიერებაში იქამდე არ იკავებს ადგილს, სანამ ობიეექტი არ შეიქმნება.
 * ობიექტი კი ამ კლასის ერთ-ერთი Instance-ია
 * მაგ:
 */
class CryptoWallet {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({ type: "DEPOSIT", amount });
  }
}

const wallet1 = new CryptoWallet(); // ვქმნით კლასის ობიექტს
wallet1.deposit(1000); // და მასზე გამოვიძახებთ ფუნქციას კლასში გაწერილს

// 12)რას აკეთებს constructor class-ში?
/**
 * constructor-ის დანიშნულებაა საწყისი მნიშვნელობების მინიჭება ობიექტისთვის როდესაც მას new-თი ვქმნით
 */

// 13)რა განსხვავებაა მემორი ჰიპსა და მემორი სტექკს შორის
/**
 * Stack - სწრაფი, მცირე მეხსიერება. ინახება პრიმიტიული მნიშვნელობები და function call-ები
 * Heap - დიდი მეხსიერება. ინახება object, array, function-ები (reference-ებით)
 * მაგ:
 */
let counter = 0;
let isActive = true;
// ორივე stack-ში ინახება

const students = [
  { name: "Giorgi", score: 85 },
  { name: "Mariam", score: 92 },
];
// თვითონ ცვლადის მისამართი "students" stack-ში ინახება, რაც მიუთითებს heap-ის მისამართზე,
// სადაც თვითონ მასივის სტრუქტურა და მასში შემავალი ელემენტები ინახება

// 14) რა არის ქოლსტეკი
/**
 * მექანიზმი, რომლის მეშვეობითაც JS აკონტროლებს რომელი ფუნქცია შესრულდეს, მაგ:
 */
function reserve() {
  callIn();
}

function callIn() {
  bookTable();
}

function bookTable() {
  console.log("Table booked");
}

reserve();

// შეიქმნება ასეთი სტეკი
/**
 * reserve
 *    |
 * callIn
 *    |
 * bookTable
 *    |
 * console.log()
 */
// პირველი შესრულდება ბოლოს დამატებული ფუნქცია, ანუ Call Stack მუშაობს LIFO (Last In First Out) პრინციპით

// 15) რა არის ივენთ ლუპი
/**
 * JavaScript single-threaded (ანუ ერთ ნაკადად) მუშაობს, მაგრამ Event Loop-ის დახმარებით ასინქრონულ ოპერაციებსაც ასრულებს პარალელურ რეჟიმში.
 * სისტემა შედგება 4 ძირითადი ნაწილისგან:
 * Call Stack (ზემოთ განვმარტე)
 * Web APIs - ამუშავებს ასინქრონულ კოდს, როგორიცაა მაგალითად setTimout, fetch
 * ის ამოწმებს ცარიელია თუ არა Call Stack
 * Microtask - მაღალი პრიორიტეტის მქონე queue, სადაც ხვდება Promise-ების ატრიბუტები (then, catch) და async/await კოდი.
 * Macrotask - შედარებით დაბალი პრიორიტეტის queue, სადაც ხვდება ტაიმერები (setTimeout)
 * მაგ:
 */
let handleFunction = new Promise((res) => {
  res("resolved");
});

console.log("start");
handleFunction.then((res) => console.log(res)); // მიკროტასკია
console.log("end");
// Output: start -> end -> resolved
