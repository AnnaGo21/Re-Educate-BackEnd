/**
 * 3. დაწერე ფუნქცია, რომელიც მიიღებს n და callback-ს, როცა n > 27-ზე გაუშვი ეს callback-ი,
 *  რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე. სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
 */

function checkNumber(n, callback) {
  if (n > 27) callback(n);
  else console.log(`${n} is less than 27`);
}

function showMessage(n) {
  console.log(`${n} is greater than 27`);
}

checkNumber(17, showMessage);
