/**
 * 1) დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
 */
function letterCount(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) counter++;
  }
  console.log(`${letter} repeats ${counter} times`);
}

let str =
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe";
letterCount(str, "n");

/**
 * 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი. მაგალითად ana, abba, gig)
 */
function checkPalindrome(str) {
  let cleanStr = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (cleanStr[i] != cleanStr[cleanStr.length - 1 - i]) {
      //   console.log(cleanStr[i] + " and " + cleanStr[cleanStr.length - 1 - i]);
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome("Abba"));
console.log(checkPalindrome("Rotator"));
console.log(checkPalindrome("abcdba"));

/**
 * 3) შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების ორ მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს.
 *  გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
 */
function mergeUniqueAndSum(arr1, arr2) {
  let unitedArr = arr1.concat(arr2);
  let uniqueArr = unitedArr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
  let sum = uniqueArr.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

console.log(mergeUniqueAndSum([1, 2, 3, 2], [3, 4, 5, 5, 8]));

/**
 * 4) შექმენი ფუნქცია ფაქტორიალის დასათვლელად.
 */
function factorialCount(num) {
  if (num === 1 || num === 0) return num;
  if (num < 0) {
    console.log("Please enter positive number");
    return;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialCount(6));

/**
 * 5) Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ
 * [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7] ანუ ინდექსები
 */
function twoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return "Not found such pair";
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], 100));
