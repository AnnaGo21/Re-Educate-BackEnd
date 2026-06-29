#!/usr/bin/env node
// commander ამის გარეშე ვერ იმუშავებს, თანაც სულ თავში უნდა ეწეროს ეს
// Commander ზოგადად გამოიყენება რაღაც ბრძანების შესასრულებლად ტერმინალში

const http = require("http");
const { sum, print, reverseString, write, read } = require("./utils/helper");
const { Command } = require("commander");
const program = new Command();

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.end();
});

// npm init -y  - command-ი რომლითაც დარეფრეშებას ვაღწევთ
server.listen(3030, () => {
  console.log("Server running on http://localhost:3030");
});

sum(10, 25);
print("Sunny weathers");
reverseString("Welcome");

async function main1() {
  // each await only waits within its own function's scope. That's why we need 'await' here as well
  await write("message.txt", "giorgi");
}
main1();

async function main2() {
  await read("data.json", true);
}
main2();
// console.log(main2()); //ესე არ იმუშავა რადგან console-მა დაასწრო read-ს,
// ამისთვის თვითონ იმ ფუნქციაშივე (read-ში, helper.js ფაილში) უნდა დავაკონსოლოთ

// Axios
// const axios = require("axios");

// async function fetchByAxios(API) {
//   let res = await axios.get(API);
//   console.log(res.data);
// }

// fetchByAxios("https://jsonplaceholder.typicode.com/users");

program
  .command("naming")
  .description("Console name and surname")
  .argument("name")
  .argument("surname")
  .action(async (name, surname) => {
    console.log(name);
    console.log(surname);
  });

//package-json-ში ჩავამატებთ bin-ს, შემდეგ main ფაილში: "#!/usr/bin/env node" დასაწყისში,
// და შემდეგ გავუშვებთ "npm link" command-ს ტერმინალში
program
  .command("create")
  .description("this is create command desc")
  .argument("name")
  .argument("age")
  .action(async (name, age) => {
    let readDataJson = await read("data.json", true);
    let lastID = readDataJson[readDataJson.length - 1]?.id || 0;
    let newObj = {
      id: lastID + 1,
      name,
      age,
    };

    readDataJson.push(newObj);
    await write("data.json", JSON.stringify(readDataJson, null, 2));
  });

// დაამტეთ show command რომელიც მაცვენებს ინფიორმაციას data.json ის შესახებ
program
  .command("show")
  .description("this is show data command")
  .action(async () => {
    let readDataJson = await read("data.json", true);
    console.log(readDataJson);
  });

// დაამატეთ delete command რომელიც წაშლის იუზერს id -ის მეშევობით
program
  .command("delete")
  .description("this is delete command by id")
  .argument("id")
  .action(async (id) => {
    let readDataJson = await read("data.json", true);
    let filtered = readDataJson.filter((user) => user.id !== Number(id));
    await write("data.json", JSON.stringify(filtered, null, 2));
    console.log(`User with id ${id} deleted.`);
  });

program.parse();
