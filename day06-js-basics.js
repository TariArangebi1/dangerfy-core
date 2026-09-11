const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Number of Users:", data.length);
};

console.log("Starting...");
getUsers();
console.log("This runs before the fetch finishes");

const fetchUserCount = async () => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Number of users:", data.length);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
 };


console.log("Starting fetch...");
fetchUserCount();
console.log("This logs first!");