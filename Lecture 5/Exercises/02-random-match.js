/**
 * 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე,
 *  სანამ ეს გადაცემული და რენდომ რიცხვი არ დაემთხვევა ერთმამენთს
 */
/* გადაცემულ პარამეტს ერთდროულად ვიყენებ, როგორც
  target number-ს და random range-ს */
function randomGenerator(num) {
  let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * num) + 1;
    console.log(randomNum);
    if (num === randomNum) {
      console.log(`Match: ${num}`);
      clearInterval(interval);
    }
  }, 500);
}

randomGenerator(10);
