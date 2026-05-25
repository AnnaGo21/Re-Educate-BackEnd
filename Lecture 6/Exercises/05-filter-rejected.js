/**
 * 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე მარტო წარუმატებლები
 */

//Let's combine them
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
