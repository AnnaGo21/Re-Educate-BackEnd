const fs = require("fs/promises");

function sum(a, b) {
  console.log(a + b);
}

function print(str) {
  console.log(str);
}

function reverseString(str) {
  let reversedString = str.split("").reverse().join("");
  console.log(reversedString);
}

async function write(filePath, data) {
  await fs.writeFile(filePath, data);
}

async function read(filePath, parse) {
  let readFile = await fs.readFile(filePath, "utf-8");
  let canRead = parse ? JSON.parse(readFile) : parse;
  console.log(canRead);
  return canRead;
}

module.exports = { sum, print, reverseString, write, read };
