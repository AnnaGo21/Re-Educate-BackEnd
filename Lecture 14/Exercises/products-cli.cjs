#!/usr/bin/env node

//Used cjs file format, so Node will treat this file as CommonJS regardless of package type

const { Command } = require("commander");
const fs = require("fs/promises");
const { readFile, saveFile } = require("./utils/helper");
const { read } = require("fs");

const program = new Command();

program
  .command("show")
  .description("show all products")
  .option("--isexpire", "show if product is expired")
  .action(async (options) => {
    const products = await readFile("data/products.json", true);
    const result = options.isexpire
      ? products.map((el) => ({
          ...el,
          isExpired: new Date(el.date) < new Date(),
        }))
      : products;
    console.log(result);
  });

// <> means it's required
// [] means it's optional
program
  .command("create")
  .description("create a product")
  .argument("<name>")
  .argument("<description>")
  .argument("<date>")
  .argument("<category>")
  .action(async (name, description, date, category) => {
    const products = await readFile("data/products.json", true);
    const lastId = products[products.length - 1]?.id || 0;
    const newProduct = {
      id: lastId + 1,
      name,
      description,
      date,
      category,
    };
    products.push(newProduct);
    await saveFile(products);
    console.log("created successfully", newProduct);
  });

program
  .command("find")
  .description("find product by id")
  .argument("<id>")
  .option("--isexpire", "show if product is expired")
  .action(async (id, options) => {
    const products = await readFile("data/products.json", true);
    const product = products.find((el) => el.id === Number(id));
    if (!product) {
      console.log("product not found");
      return;
    }
    if (options.isexpire) {
      console.log({
        ...product,
        isExpired: new Date(product.date) < new Date(),
      });
    } else {
      console.log(product);
    }
  });

program
  .command("delete")
  .description("delete product by id")
  .argument("<id>")
  .action(async (id) => {
    const products = await readFile("data/products.json", true);
    const index = products.findIndex((el) => el.id === Number(id));
    if (index === -1) {
      console.log("not found");
      return;
    }
    const deleted = products.splice(index, 1);
    await saveFile(products);
    console.log("deleted successfully", deleted);
  });

program
  .command("update")
  .description("update product by id")
  .argument("<id>")
  .argument("<name>")
  .argument("[description")
  .argument("[date]")
  .argument("[category]")
  .action(async (id, name, description, date, category) => {
    const products = await readFile("data/products.json", true);
    const index = products.findIndex((el) => el.id === Number(id));
    if (index === -1) {
      console.log("not found");
      return;
    }
    products[index] = {
      ...products[index],
      name,
      description,
      //define whether argument is defined or not
      ...(date && { date }),
      ...(category && { category }),
    };
    await saveFile(products);
    console.log("updated successfully");
  });

program.parse();
