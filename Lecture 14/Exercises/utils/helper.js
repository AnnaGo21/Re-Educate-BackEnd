import fs from "fs/promises";

export function toCapital(str) {
  return str.toUpperCase();
}

export function isPalindrome(str) {
  const cleaned = str.toLowerCase().split(" ").join("");
  return cleaned === cleaned.split("").reverse().join("");
}

export function longestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, cur) => (cur.length > longest.length ? cur : longest),
      "",
    );
}

export async function readFile(filePath, parse) {
  let content = await fs.readFile(filePath, "utf-8");
  return parse ? JSON.parse(content) : content;
}

export async function saveFile(data) {
  await fs.writeFile("data/products.json", JSON.stringify(data, null, 2));
}
