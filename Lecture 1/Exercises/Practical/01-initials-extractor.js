/**
 * 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
 */

let fullName = "Lika Mamaladze";

let splitWords = fullName.split(' ');

let firstInitial = splitWords[0][0];
let secondInitial = splitWords[1][0];

let resultInitials = `${firstInitial}.${secondInitial}.`;
console.log(resultInitials);