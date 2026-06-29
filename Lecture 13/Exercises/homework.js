#!/usr/bin/env node
const { read, write, sum, reverseString } = require("./utils/helper");
const axios = require("axios");
const { Command } = require("commander");

/**
 * 1) შექმენი utils/helper.js სადაც გექნება ფუნქციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და
 *  write(ანალოგიურად stringify-უნდა გაუკეთოს).
 *  შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ.
 *  ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.
 */

console.log(sum(5, 10));
console.log(reverseString("Welcome"));

const program = new Command();

program
  .command("create")
  .description("creates 2 files")
  .action(async () => {
    await write("products.json", [
      { id: 1, name: "bread" },
      { id: 2, name: "apple" },
    ]);
    await write("cities.json", [
      { id: 1, city: "Tbilisi" },
      { id: 2, city: "Tokyo" },
      { id: 3, city: "Singapore" },
    ]);
    console.log("products.json and products.json were created.");
  });

/**
 * 2)წამოიღე ინფორმაცია ამ ორი api-დან
 */
let api = "https://jsonplaceholder.typicode.com/users";
let api2 = "https://jsonplaceholder.typicode.com/posts";
// 2.1) გამოიყენე axios და ერთდროულად გაუშვი 2 API.
program
  .command("fetch-all")
  .description("Fetch data simultaneously from two APIs")
  .action(async () => {
    let [users, posts] = await Promise.all([axios.get(api), axios.get(api2)]);
    console.log("Users:", users.data);
    console.log("Posts:", posts.data);
  });

// 2.2) გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
program
  .command("fetch-race")
  .description("Fetch the fastest API response")
  .action(async () => {
    let fastestData = await Promise.race([axios.get(api), axios.get(api2)]);
    console.log(
      "Fastest data was from",
      fastestData.config.url.split("/").at(-1),
    );
    // console.log(fastestData);
  });

// 2.3) გაუშვი ორივე ერთად და დააბრუნე ინფორმაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
let API1 = "https://jsonplaceholder.typicode.com/users";
let API2 = "https://jsonplaceholder.typicode.com/pts";

program
  .command("fetch-settled")
  .description("Shows status of each API response")
  .action(async () => {
    let results = await Promise.allSettled([axios.get(API1), axios.get(API2)]);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Resolved:", result.value.config.url);
      } else {
        console.log("Rejected:", result.reason.message);
      }
    });
  });

/**
 * 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება, წაშლა,
 * id-ის მიხედვით კონკრეტული ობიექტის ამოღება, და option-ის მიხედვით(--america)-
 * ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add giorgi 574221355 --america)-
 * ასე თუ გადავცემთ უნდა დაამატოს 011574221355
 */
program
  .command("add")
  .description("Adds a phone number")
  .argument("name")
  .argument("number")
  .option("--america", "append 011 to number")
  .action(async (name, number, options) => {
    let phones = await read("phones.json", true);
    let lastID = phones[phones.length - 1]?.id || 0;
    let phoneNumber = options.america ? `011${number}` : number;
    phones.push({ id: lastID + 1, name, number: phoneNumber });
    await write("phones.json", phones);
    console.log(`Added: ${name} - ${phoneNumber}`);
  });

program
  .command("delete")
  .description("Delete entry by id")
  .argument("id")
  .action(async (id) => {
    let phones = await read("phones.json", true);
    let deleted = phones.find((user) => user.id === +id);
    let filtered = phones.filter((user) => user.id !== +id);
    await write("phones.json", filtered);
    console.log(`Deleted contact ${deleted?.name}`);
  });

program.parse();
