// npm i -g typescript
// sudo npm i -g typescript
// tsc -v
// npx tsc --init


//1) tsc -v შევამოწმოთ გვაქვს თუ არა ტაპისკრიპტი დაყენებული

//2)თუ არ გვაქვს დაყენებული გავუშვატ შემდეგი ბრძანება ვინდოუსზე npm i -g typescript თუ მაკია ნად ლინუქის გავქვს გავუშვათ sudo npm i -g typescript

//3)თუ მინდა გავუშვა პროცესი ტაიპსკრიპტით უნდა გამოვიყენო  tsc index.ts

//4) გარემოს შექმნა tsc --init

//5)ამოვაკომენტაროთ dist ფოლდერი 

//6_ გავუშვატ სერვერი tsc --watch

const userName:string = "nika"
const age:number = 23
const isSmoker:boolean = true

// console.log(isSmoker)

function sum(a:number,b:number){
    return a + b
}

console.log(sum(10,5))

function isPositive(n:number){
    return n > 0
}

console.log(isPositive(10))

function positiveNum(a:number,b:number,isPositive:boolean){
    return isPositive ? Math.abs(a+b) : a+b
}

console.log(positiveNum(10,-20,true))

const arr:(number | string | (() => void))[] = [10,20,30,"girogi","nika",() => {}]

interface IUser {
    firstName:string,
    lastName:string,
    age:number,
    address:IAddress,
    hobbies:string[]
}

interface IAddress {
    home: string;
    job: string;
}

// extends - IUser-ის ყველა ველი + ახალი ველები
interface IAdmin extends IUser {
    role: "admin" | "superadmin";
    permissions: string[];
}

const user:IUser = {
    firstName:"nika",
    lastName:"nikadze",
    age:22,
    address:{
        home:"pekini",
        job:"number 72"
    },
    hobbies:["coding","dance","footbal"]
}

const admin:IAdmin = {
    firstName:"giorgi",
    lastName:"bachidze",
    age:25,
    address:{
        home:"vake",
        job:"saburtalo"
    },
    hobbies:["coding","gaming"],
    role:"admin",
    permissions:["delete","update"]
}

// // ======= TYPE & UNION TYPE =======

// // type - ტიპის "მეტსახელი" (alias), interface-ის მსგავსია მაგრამ უფრო მოქნილი

// // 1) მარტივი type alias
// type ID = number | string | boolean  // union type - შეიძლება იყოს number ან string

// const userId1: ID = true       // ✓ number
// const userId2: ID = "abc"   // ✓ string

// // 2) union type ფუნქციაში
// function printId(id: number | string | boolean) {
//     console.log("ID:", id)
// }

// printId(1)      // ✓
// printId("abc")  // ✓
// printId(true)  // ✓

// // 3) type-ით ობიექტი (interface-ის მსგავსი)
// type TProduct = {
//     name: string,
//     price: number,
//     category: "food" | "tech" | "clothes"  // union - მხოლოდ ეს 3 მნიშვნელობა
// }

// const product: TProduct = {
//     name: "laptop",
//     price: 1200,
//     category: "tech"  // სხვა მნიშვნელობა TypeScript-ი შეცდომას მოგცემს
// }


// ======= GENERICS <T> =======

// პრობლემა: გვინდა ფუნქცია რომელიც მასივის პირველ ელემენტს აბრუნებს
// მაგრამ მასივი შეიძლება იყოს number[], string[], ან object[]

// ❌ ცუდი გზა - any იყენებს, ტიპის შემოწმება იკარგება
function getFirstBad(arr: any[]) {
    return arr[0]
}

// ✅ სწორი გზა - Generic <T>
// T არის "placeholder" ტიპი - გამოძახებისას TypeScript თავად მიხვდება რა ტიპია
// function getFirst<T>(arr: T[]): T {
//     return arr[0]
// }

// // TypeScript თავად "მიხვდება" T = number
// const firstNum = getFirst([1, 2, 3])          // firstNum: number
// // TypeScript თავად "მიხვდება" T = string
// const firstStr = getFirst(["a", "b", "c"])    // firstStr: string

// type TUser = { name: string, age: number }

// const users: TUser[] = [
//     { name:"nika", age:22 },
//     { name:"giorgi", age:25 },
//     { name:"luka", age:20 },
//     { name:"ana", age:23 },
//     { name:"nino", age:21 },
//     { name:"dato", age:28 },
// ]

// const firstUser = getFirst(users)   // firstUser: TUser — TypeScript იცის .name და .age გვაქვს
// console.log(firstUser.name)         // ✓ "nika"

// const users = [
//     { name:"nika", age:22 },
//     { name:"giorgi", age:25 },
//     { name:"luka", age:20 },
//     { name:"ana", age:23 },
//     { name:"nino", age:21 },
//     { name:"dato", age:28 },
// ]


// function main<T>(arr:T[]){
//     return arr[0]
// }

// const firstUser = main(users)
// console.log(firstUser)


// module.exports = async () => {
//     try {
//         await mongoose.connect("რელაური მისამრთი")
//     } catch (error) {
//         console.log(error,"this is from mongo")
//     }
// }