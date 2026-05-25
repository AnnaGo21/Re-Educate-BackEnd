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
