/**
 * 1) დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
 */

function findAverageOfEvens(arr) {
  let evenNums = arr.filter((el) => el % 2 === 0);
  let sum = evenNums.reduce((acc, cur) => acc + cur, 0);
  return sum / evenNums.length;
}

console.log(`Average - ${findAverageOfEvens([1, 2, 3, 4, 5, 6, 7, 8])}`);

/**
 * 2) დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
 */
function countWords(sentence) {
  let wordsArr = sentence.trim().split(" ");
  return wordsArr.length;
}

console.log(countWords("I love JavaScript a lot "));

/**
 * 3) დაწერე ფუნქცია რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
 */
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Is 17 prime: " + checkPrime(17));
console.log("Is 311 prime: " + checkPrime(311));
console.log("Is 91 prime: " + checkPrime(91));

/**
 * 4) იპოვე ყველაზე გრძელი სიტყვა
 */
function findLongestWord(words) {}
let words = ["dog", "elephant", "cat", "hippopotamus"];

/**
 * 5) დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
 */
let arr = [3, 5, 3, 2, 5, 5, 3, 5];

/**
 * 6) დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * 7) დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
 */
let nums = [10, 2, 33, 5, 7];
