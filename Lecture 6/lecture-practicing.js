/**
 * I - სინქრონული კოდი
 * II - მიკროტასკი - Promise (resolve, reject)
 * III - მაკროტასკი - WebAPI (setInterval / setTimeout)
 */

// შეგვიძლია promise-ში ჩავწეროთ webapi, მაგრამ ეს მას მიკროტასკად არ გადააქცევს
// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(1);
//   }, 3000);
// });

// setTimeout(() => {
//   console.log(2);
// }, 1000);
// ესეც მტკიცებულება, ჯერ 2 ილოგება, მიუხედავად იმისა რომ ზოგადად promise-ს მეტი უპირატესობა აქვს,
// თუმცა ვინაიდან Promise რეალურად ცარიელია, და მასში მხოლოდ მაკროტასკია გამოძახებული, ის მას როგორც მიკროტასკს, არ უდგება.
// თუკი გვინდა რომ როგორც მიკროტასკი ისე აღიქვას, მაშინ we have to call res() inside the first promise, then .then() microtask should be created.

//ანუ აი ასე:
// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(1);
//   }, 4000);
//   res("Redirected into MicroTask");
// });

// myPromise.then((msg) => {
//   console.log(msg);
// });

// setTimeout(() => {
//   console.log(2);
// }, 1000);

//!!!!!!!!!!!!!!!!!!!! საკითხავი

//What if
// let myPromise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("One");
//   }, 2000);
// });

// let myPromise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Two");
//   }, 1000);
// });

// myPromise1
//   .then((res) => {
//     console.log(res);
//     return myPromise2;
//   })
//   .then((res) => console.log(res));
//შედეგს კი გვაძლევს მეორე, მარა იქამდე არ იპრინტება, სანამ პირველი არ შესრულდება

/**
 * ასევე შეგვიძლია რაღაც სინქრონული კოდი, რომელიც გვბლოკავს დროში, მიკროტასკში გავუშვათ, ანუ პრიორიტეტი შევუმციროთ
 */

// let handleFunction = new Promise((res, rej) => {
//   res("resolved");
// });

// function blockFunction() {
//   for (let index = 0; index < 10000000000; index++) {
//     console.log("Late");
//   }
// }

// console.log(1);
// // blockFunction();
// handleFunction.then((res) => blockFunction());
// console.log(2);

// ToDo: გადააქციე მაკროტასკად !!!!!!!!!!!!!!!!!!!!!!!

/**
 * Promise.all() - მიკროტასკების ერთდროულად გაშვება
 */
// let myPromise1 = new Promise((res, rej) => {
//   res("Promise 1");
// });

// let myPromise2 = new Promise((res, rej) => {
//   res("Promise 2");
// });

// Promise.all([myPromise1, myPromise2]).then((res) => console.log(res));

/**
 * Fetch API simultaneously
 */
async function fetchUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return data[0];
}

async function fetchPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data[0];
}

// void-ის ნაცვლად უნდა დავარეთურნებინოთ ჩვენს ფუნქციებს, რომ Promise.all() გამოვიყენოთ
// Promise.all([fetchUsers(), fetchPosts()]).then((res) => console.log(res)); // თუ ათასიდან ერთი მაინც დარეჯექთდება, ყველა დარეჯექთდება
Promise.race([fetchUsers(), fetchPosts()]).then((res) => console.log(res)); // რომელიც პირველი მოვა, იმას გაუშვებს მხოლოდ, სულერთია reject იქნება თუ success
Promise.any([fetchUsers(), fetchPosts()]).then((res) => console.log(res)); //პირველივე და-resolve-ებული და მხოლოდ ის გაეშვება
Promise.allSettled([fetchUsers(), fetchPosts()]).then((res) =>
  console.log(res),
); //თითოეულის შედეგს მოგვცემს, რომელი და-resolve-და და რომელი და-reject-და
