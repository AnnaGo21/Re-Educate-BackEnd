/**
 * 6)api1 = https://jsonplaceholder.typicode.com/users
    api2 = https://jsonplaceholder.typicode.com/posts
    გაუშვი ეს ორი API ერთდროულად
 */

// მთლიანი array-ის დაბრუნებას, მაგალითად, სახელები დავაბრუნებინოთ
async function fetchUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return data.map((user) => user.name);
}

async function fetchPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data.map((post) => post.title);
}

Promise.all([fetchUsers(), fetchPosts()])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error occurred:", err));
