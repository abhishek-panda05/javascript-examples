let userRole = "admin";
let isAuthenticated = true;
let userAge = 20;

if (!isAuthenticated) {
  console.log("Please Log In.");
}
if (isAuthenticated && userRole === "admin") {
  console.log("Welcome to the Dashboard");
}
if (isAuthenticated && userRole !== "admin") {
  console.log("Access Denied");
}
