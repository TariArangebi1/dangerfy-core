//promises and fetch
console.log("Starting fetch...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Number of users:", data.length);
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  });

console.log("This logs first!");
