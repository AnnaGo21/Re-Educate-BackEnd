import express = require("express");
import connectToMongo = require("./db/connectToMongo");

const PORT = 3030;
const app = express();
app.use(express.json());
connectToMongo();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/**
 * 2) შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს 
 * და აბრუნებს ტექსტს User Nika is 22 years old.
 */

function describeUser(name: string, age: number): string {
  return `User ${name} is ${age} years old.`;
}

console.log(describeUser("Nika", 22));

/**
 * 3) აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
 * თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"
 */
interface IProduct {
  name: string;
  price: number;
}

function calculateTotalPrice(products: IProduct[]): number {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  if (total > 100) {
    console.log("Discount available!");
  }

  return total;
}

const products: IProduct[] = [
  { name: "Keyboard", price: 45 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 60 },
];

console.log("Total price:", calculateTotalPrice(products));

/**
 * 4) IHero და ISuperHero
 */
interface IHero {
  name: string;
  age: number;
}

interface ISuperHero extends IHero {
  power: string;
  level?: string;
}

function levelUp(hero: ISuperHero): void {
  hero.level = hero.age > 30 ? "Pro" : "Newbie";
  console.log(`${hero.name} is now level: ${hero.level}`);
}

const hero1: ISuperHero = {
  name: "Batman",
  age: 35,
  power: "Stealth",
};

const hero2: ISuperHero = {
  name: "Superman",
  age: 30,
  power: "Flight",
};

const hero3: ISuperHero = {
  name: "Wolverine",
  age: 26,
  power: "Regeneration",
};

levelUp(hero1);
levelUp(hero2);
levelUp(hero3);

/** 
 * 5) დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს
 */
function getFirst<T>(arr: T[]): T {
  return arr[0]!;
}

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["Ana", "Luka", "Mari", "Tornike"]));
console.log(getFirst([true, false, true]));
console.log(getFirst([hero1, hero2, hero3]));

