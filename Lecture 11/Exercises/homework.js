const fs = require("fs/promises");
//ან
// import fs from "fs/promises";

/**
 * 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
 */
async function processNumbers(nums) {
  await fs.writeFile("input.txt", JSON.stringify(nums));
  let readNums = await fs.readFile("input.txt", "utf-8");
  let parsedNums = JSON.parse(readNums);
  let sum = parsedNums.reduce((acc, cur) => acc + cur, 0);
  await fs.writeFile("input2.txt", JSON.stringify(sum));
}

let nums = [1, 2, 3, 4, 5];
processNumbers(nums);

/**
 * 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
 */
async function processText(text) {
  await fs.writeFile("fruit.txt", text);
  let readText = await fs.readFile("fruit.txt", "utf-8");
  let reversedText = reverseText(readText);
  await fs.writeFile("reversedFruit.txt", reversedText);
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

processText("Watermelon");

/**
 * 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
 */
async function createUsers(users) {
  await fs.writeFile("data.json", JSON.stringify(users, null, 2)); // ანუ მონაცემებში არაფერი შეცვალოს და 2 სფეისით დააშოროს
}

let users = [
  { name: "Jack Sparrow", age: 30, email: "jack@gmail.com" },
  { name: "Elizabeth Swann", age: 18, email: "liz@gmail.com" },
  { name: "Will Turner", age: 20, email: "will@gmail.com" },
];
createUsers(users);

/**
 * 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
 */
async function mergeFiles(text1, text2) {
  await fs.writeFile("file1.txt", text1);
  await fs.writeFile("file2.txt", text2);
  let data1 = await fs.readFile("file1.txt", "utf-8");
  let data2 = await fs.readFile("file2.txt", "utf-8");

  let mergedText = data1.concat(data2);
  await fs.writeFile("merged.txt", mergedText);
}

mergeFiles("Keep", "Going");

/**
 * 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
 */
async function countWords(text) {
  await fs.writeFile("text.txt", text);
  let readText = await fs.readFile("text.txt", "utf-8");
  let wordCount = readText.split(" ").length;
  console.log(wordCount);
}

countWords("Finally, hot summer days are here");

/**
 * 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
 */
async function filterElders(users) {
  await fs.writeFile("users.json", JSON.stringify(users, null, 2));
  let readAllUsers = await fs.readFile("users.json", "utf-8");
  let parsedUsers = JSON.parse(readAllUsers);
  let elderUsers = parsedUsers.filter((user) => user.age > 18);

  await fs.writeFile("users.json", JSON.stringify(elderUsers, null, 2));
}

let allUsers = [
  { name: "Ana", age: 23 },
  { name: "Luka", age: 26 },
  { name: "Gio", age: 17 },
];
filterElders(allUsers);

/**
 * 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
 * შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
 */
async function processStudents(students) {
  await fs.writeFile("students.json", JSON.stringify(students, null, 2));
  let readStudents = await fs.readFile("students.json", "utf-8");
  let parsedStudents = JSON.parse(readStudents);
  let passedStudents = parsedStudents.filter((student) => student.score > 50);

  await fs.writeFile("passed.json", JSON.stringify(passedStudents, null, 2));
}

let students = [
  { name: "Ana", score: 90, passed: true },
  { name: "Nika", score: 45, passed: false },
  { name: "Luka", score: 75, passed: true },
];
processStudents(students);

/**
 * 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
 */
async function filterEmails(emails) {
  await fs.writeFile("emails.json", JSON.stringify(emails, null, 2));
  let readEmails = await fs.readFile("emails.json", "utf-8");
  let parsedEmails = JSON.parse(readEmails);

  let validUsers = parsedEmails.filter((user) => user.email.includes("@"));

  await fs.writeFile("validUsers.json", JSON.stringify(validUsers, null, 2));
}

let newUsers = [
  { name: "Gio", email: "gio@gmail.com" },
  { name: "Nika", email: "nikaexample.com" },
  { name: "Mariam", email: "mariam@gmail.ge" },
  { name: "Lasha", email: "lashagmail.ge" },
  { name: "Ana", email: "ana@mail.com" },
];
filterEmails(newUsers);
