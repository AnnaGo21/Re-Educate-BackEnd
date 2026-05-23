/**
 * 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users.
 *  https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
 */

// async/await
async function fetchUsers(API) {
  let res = await fetch(API);
  let data = await res.json();
  let someUsers = data.slice(0, 4);
  return someUsers;
}

async function getData() {
  let API = "https://jsonplaceholder.typicode.com/users";
  let fetchedUsers = await fetchUsers(API);
  console.log(fetchedUsers);
}

getData();

// then/catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.slice(0, 4));
  })
  .catch((error) => {
    console.log(error);
  });
