const fs = require("fs/promises");

async function write(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function read(filePath, parse) {
  let content = await fs.readFile(filePath, "utf-8");
  return parse ? JSON.parse(content) : content;
}

function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = { read, write, sum, reverseString };
