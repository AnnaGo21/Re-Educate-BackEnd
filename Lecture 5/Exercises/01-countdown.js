/**
 * 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
 */

function countdown(sec) {
  let timer = 500;
  let interval = setInterval(() => {
    console.log(sec--);
    if (sec < 0) {
      clearInterval(interval);
    }
  }, timer);
}

countdown(10);
