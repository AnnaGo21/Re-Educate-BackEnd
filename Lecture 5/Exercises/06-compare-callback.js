/**
 * 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს.
 * თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
 */

function compareNumbers(n, m, callback) {
  if (n > m) {
    callback(n, m);
  } else console.log(`${n} is less than or equal to ${m}`);
}

function showMessage(n, m) {
  console.log(`${n} is greater than ${m}`);
}

compareNumbers(5, 7, showMessage);
