// function fetchData(callback) {
//   setTimeout(() => {
//     callback({ name: "John", age: 25 });
//   }, 2000);
// }

// function processData(data) {
//   console.log("Received data: ", data);
//   console.log("Processed data:", { ...data, isAdmin: tue });
// }
// fetchData(processData);

// console.log("GEC START");
// function printPretty() {
//   console.log("Pretty");
//   let ans = 2 + 3;
//   console.log(ans);
//   console.log("End Pretty");
// }

// setTimeout(printPretty, 10000);
// console.log("GEC END");

function printPretty() {
  console.log("Pretty");
  let ans = 2 + 3;
  console.log(ans);
  console.log("End Pretty");
}
const btn = document.querySelector("button");
btn.addEventListener("click", printPretty);
