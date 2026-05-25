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
