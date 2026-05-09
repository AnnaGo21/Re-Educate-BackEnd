/**
 * 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
    "orange"-ის წინ დაამატე "mango"
    ბოლოს დაბეჭდე ახალი მასივი.
 */

let fruits = ["apple", "banana", "orange", "kiwi"];
ჼ
//განვაზოგადოთ ყველანაირ მიმდევრობაზე
fruits.splice(fruits.indexOf("banana"), 1);

fruits.splice(fruits.indexOf("orange"), 0, "mango");
console.log(fruits);
