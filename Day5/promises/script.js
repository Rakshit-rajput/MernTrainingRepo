// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Operation successful");
//     } else {
//       reject("Operation failed");
//     }
//   }, 30000);
// });
// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//fetch function

console.log("function start");
setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .then(console.log("after fetch"))
    .catch((error) => {
      console.error(error);
    });
}, 5000);
console.log("function end");
