/**
 * 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და
 * ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsettled გამოიყენე.
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
