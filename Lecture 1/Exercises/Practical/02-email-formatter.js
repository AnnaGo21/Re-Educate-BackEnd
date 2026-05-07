/**
 * 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
 */

let email = " EXAMPLE@MAIL.COM ";

let cleanedEmail = email.trim().toLowerCase();

let message = cleanedEmail.includes("@")
    ? "contains '@'"
    : "doesn't contain '@'";

console.log(`${cleanedEmail} ${message}`);