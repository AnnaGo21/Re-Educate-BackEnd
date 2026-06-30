import { toCapital, isPalindrome, longestWord } from "./utils/helper.js";
/**
 * 1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს და გადააქცევს capital letter-ად.
 * აუცილებელია გამოიყენო module(package-დან შეცვალე)
 */
console.log(toCapital("hello world"));

/**
 * 2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა.
 * აუცილებელია module(package-დან შეცვალე) გამოიყენო
 */
console.log(isPalindrome("abba"));
console.log(isPalindrome("hello"));

/**
 * 3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) -
 * უნდა დააბრუნოს JavaScript. აუცილებელია გამოიყენო module.
 */
console.log(longestWord("I love JavaScript very much"));

/**
 * 4)შექმენი სერვერი სადაც გექნება როუტები,"/","/users","/posts".
 * აუცილებელია გაუკეთო ორივეს pagination,id-ის მეშვეობით ძებნა და /users ასევე დაამატე name-ით ძებნა
 */
// Solution is in server.cjs file

/**
 * 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და აფდეითი.
 * fields(name,description,date,category)
 * + მე თუ გავატან option ის მიხედვით --isexpire. უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა
 */
// Solution is in products-cli.cjs file
