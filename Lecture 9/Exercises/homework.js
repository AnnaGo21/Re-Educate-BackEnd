/**
 * 1) დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
 */

function findAverageOfEvens(arr) {
  let evenNums = arr.filter((el) => el % 2 === 0);
  let sum = evenNums.reduce((acc, cur) => acc + cur, 0);
  return sum / evenNums.length;
}

console.log(`Average: ${findAverageOfEvens([1, 2, 3, 4, 5, 6, 7, 8])}`);

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
function findLongestWord(words) {
  let longestWord = words.sort((a, b) => b.length - a.length)[0];
  return longestWord;
}

let words = ["dog", "elephant", "cat", "hippopotamus"];
console.log(findLongestWord(words));

/**
 * 5) დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
 */
function findMostOccurred() {
  let frequencyOfNums = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  // console.log(frequencyOfNums);

  let mostOccurred = Object.keys(frequencyOfNums).sort(
    (a, b) => frequencyOfNums[b] - frequencyOfNums[a],
  )[0];
  return mostOccurred;
}

let arr = [3, 5, 3, 2, 5, 5, 3, 5];
console.log(`Most occurred number: ${findMostOccurred(arr)}`);

/**
 * 6) დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
 */
function parityFrequency(nums) {
  let parityFrequency = numbers.reduce(
    (acc, cur) => {
      if (cur % 2 === 0) acc.even++;
      else acc.odd++;
      return acc;
    },
    { even: 0, odd: 0 },
  );
  return parityFrequency;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(parityFrequency(numbers));

/**
 * 7) დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
 */
function findSmallestNum(nums) {
  let smallestNum = nums.reduce((acc, cur) => (acc < cur ? acc : cur));
  return smallestNum;
}

let nums = [10, 2, 33, 5, 7];
console.log(findSmallestNum(nums));
