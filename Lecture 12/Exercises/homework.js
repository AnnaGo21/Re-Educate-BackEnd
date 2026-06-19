const fs = require("fs/promises");
const http = require("http");

/**
 * 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
 */
async function task1() {
  await fs.mkdir("task1/folder1", { recursive: true });
  await fs.mkdir("task1/folder2", { recursive: true });

  await fs.writeFile("task1/text1.txt", "file A");
  await fs.writeFile("task1/text2.txt", "file B");
  await fs.writeFile("task1/text3.txt", "file C");

  let items = await fs.readdir("task1");

  for (let item of items) {
    let stats = await fs.lstat(`task1/${item}`);

    if (stats.isDirectory()) {
      await fs.rmdir(`task1/${item}`);
      console.log(`Deleted folder: ${item}`);
    }
  }
}

/**
 * 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js
 * ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js
 * შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt,
 * ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.
 */
async function task2() {
  await fs.mkdir("task2/folder1", { recursive: true });
  await fs.writeFile("task2/main.js", "console.log('main file')");
  await fs.writeFile("task2/folder1/index.js", "console.log('index file')");
  await fs.writeFile("task2/message.txt", "Hello World");

  let data = await fs.readFile("task2/message.txt", "utf-8");
  let reversed = data.split("").reverse().join("");

  await fs.writeFile("task2/message.txt", reversed);
}

/**
 * 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი.
 * 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js.
 * შენ უნდა იპოვო ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩაწერო საერთო all.txt-ში
 */
async function task3() {
  await fs.mkdir("task3", { recursive: true });

  await fs.writeFile("task3/file1.txt", "file1");
  await fs.writeFile("task3/file2.txt", "file2");
  await fs.writeFile("task3/file3.txt", "file3");
  await fs.writeFile("task3/script1.js", "console.log('script1')");
  await fs.writeFile("task3/script2.js", "console.log('script2')");
  await fs.writeFile("task3/script3.js", "console.log('script3')");

  let items = await fs.readdir("task3");
  let allContent = "";

  for (let item of items) {
    if (item.endsWith(".txt")) {
      let content = await fs.readFile(`task3/${item}`, "utf-8");
      allContent += content + "\n";
    }
  }

  await fs.writeFile("task3/all.txt", allContent);
  console.log("all.txt written with .txt file contents");
}

async function main() {
  await task1();
  await task2();
  await task3();
}

main();

/**
 * 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
 */
const animals = [{ name: "dog" }, { name: "cat" }, { name: "lion" }];

const cars = [
  { brand: "BMW", price: 50000 },
  { brand: "Mercedes", price: 70000 },
  { brand: "Toyota", price: 30000 },
];

const motorcycles = [
  { brand: "Honda", price: 15000 },
  { brand: "Yamaha", price: 12000 },
  { brand: "Ducati", price: 25000 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/animals") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(animals));
    res.end();
  }

  if (req.url === "/cars") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(cars));
    res.end();
  }

  if (req.url === "/motorcycle") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(motorcycles));
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
