/**
 * 1) function block(){
    for(let i = 1 ;i <10000000000;i++){}
    }

    console.log("one")
    block()
    console.log("two")
    იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
    აუცილებელია გამოიყენო ფრომისი
*/
let handleFunction = new Promise((res, rej) => {
  res("Block function resolved (Transformed into Micro Task)");
});

function block() {
  for (let i = 1; i < 10000000000; i++) {}
}

console.log("one");
handleFunction.then((res) => block());
console.log("two");

// ან პირდაპირ resolve-ის გამოყენებით
function block() {
  for (let i = 1; i < 10000000000; i++) {}
}

console.log("one");

Promise.resolve().then((res) => block());

console.log("two");
