const fs = require("fs/promises");

async function readFile(filePath, parse) {
  const data = await fs.readFile(filePath, "utf-8");
  return parse ? JSON.parse(data) : data;
}

async function writeFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readFile, writeFile };
