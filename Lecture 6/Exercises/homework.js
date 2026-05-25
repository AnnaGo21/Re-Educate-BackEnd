/**
 * 1) function block(){
    for(let i = 1 ;i <10000000000;i++){}
    }

    console.log("one")
    block()
    console.log("two")
    იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
    აუცილებელია გამოიყენო ფრომისი
*/
let handleFunction = new Promise((res, rej) => {
  res("Block function resolved (Transformed into Micro Task)");
});

function block() {
  for (let i = 1; i < 10000000000; i++) {}
}

console.log("one");
handleFunction.then((res) => block());
console.log("two");

// ან პირდაპირ resolve-ის გამოყენებით
function block() {
  for (let i = 1; i < 10000000000; i++) {}
}

console.log("one");

Promise.resolve().then((res) => block());

console.log("two");

/**
 * 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და
 * ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
 */
let myPromise1 = new Promise((res, rej) => {
  res("Resolved");
});

let myPromise2 = new Promise((res, rej) => {
  rej("Rejected");
});

myPromise1
  .then((res) => console.log(res))
  .catch((err) => console.log("Error", err));
myPromise2
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));

Promise.allSettled([myPromise1, myPromise2]).then((res) => console.log(res));

/**
 * 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
 */
let promise1 = new Promise((res, rej) => {
  setTimeout(() => rej("error 1"), 2000);
});

let promise2 = new Promise((res, rej) => {
  setTimeout(() => res("success 2"), 1000);
});

let promise3 = new Promise((res, rej) => {
  setTimeout(() => res("success 3"), 3000);
});

let promise4 = new Promise((res, rej) => {
  setTimeout(() => rej("error 4"), 500);
});

Promise.any([promise1, promise2, promise3, promise4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/**
 * 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
 */
let promises = [
  Promise.resolve("success 1"),
  Promise.reject("error 1"),
  Promise.resolve("success 2"),
  Promise.reject("error 2"),
];

Promise.allSettled(promises).then((res) => {
  let outcome = res.reduce(
    (acc, cur) => {
      if (cur.status === "fulfilled") acc.success++;
      else acc.failed++;
      return acc;
    },
    { success: 0, failed: 0 },
  );
  console.log(outcome);
});

/**
 * 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
 */
let promises = [
  Promise.resolve("success 1"),
  Promise.reject("error 1"),
  Promise.resolve("success 2"),
  Promise.reject("error 2"),
  Promise.reject("error 3"),
];

Promise.allSettled(promises).then((res) => {
  let rejectedOnes = res.filter((el) => el.status === "rejected");
  console.log(rejectedOnes);
});

/**
 * 6)api1 = https://jsonplaceholder.typicode.com/users
    api2 = https://jsonplaceholder.typicode.com/posts
    გაუშვი ეს ორი API ერთდროულად
 */
// მთლიანი array-ის დაბრუნებას, მაგალითად, სახელები დავაბრუნებინოთ
async function fetchUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return data.map((user) => user.name);
}

async function fetchPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data.map((post) => post.title);
}

Promise.all([fetchUsers(), fetchPosts()])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error occurred:", err));
