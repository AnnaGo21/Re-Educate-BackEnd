// Practice-Exercises

// ამოვიღოთ ბოლო ასო
let str = "javascript";
console.log(str[str.length - 1]);
console.log(str.charAt(str.length - 1)); // It's legacy
console.log(str.slice(-1));
console.log(str.at(-1)); // It's modern

// ამოვჭრათ "World"
let text = "Hello World";
console.log(text.slice(text.indexOf("W")));
let splitted = text.split(" ");
console.log(splitted[1]);

// გადავიყვანოთ დიდ ასოებში
let firstName = "Ani";
console.log(firstName.toUpperCase());

// გავაერთიანოთ ორი სტრინგი
let first = "Hello";
let second = "World";
console.log(first.concat(second));

// სფეისები წავშალოთ და ჩავანაცვლოთ სიტყვა
let statement = "   I love js js js    ";
console.log(statement.trim().replaceAll("js", "javascript"));
