let arr = [2, 10, 22, 32];

// function printPretty(elem) {
//   console.log(":", elem);
// }

// function printArray(arr) {
//   arr.forEach(printPretty);
// }

// printArray(arr);

function printPretty(elem) {
  console.log(":", elem);
}
// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     printPretty(arr[i]);
//   }
//   arr.forEach(printPretty);
//   arr.forEach((elem) => {
//     console.log(":", elem);
//   });
// }

// printArray(arr);

arr.map(printPretty);
