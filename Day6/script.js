// const arr = [
//   "Delhi",
//   "Mumbai",
//   "Chennai",
//   "kolkata",
//   "Pune",
//   "Bangalore",
//   "Hyderabad",
//   "Ahmedabad",
//   "Jaipur",
//   "Surat",
// ];

// console.log(arr);
// console.log(arr.includes("kolkata"));
// const ans = arr.filter((s) => {
//   if (s.includes("k")) {
//     return s;
//   }
// });
// console.log(ans);

// const cities = [
//   "mumbai-india",
//   "shengahi-china",
//   "new york-usa",
//   "paris",
//   "france",
//   "tokyo",
//   "japan",
// ];
// const ans1 = cities.filter((a) => a.toLowerCase().includes("india"));
// console.log(ans1);

console.log("start");

async function callAPI() {
  const pr = new Promise((resolve, reject) => {
    console.log("promise 1 Started");
    setTimeout(() => {
      console.log("Timeout 1 Resolved");
      resolve("Promise 1 resolved");
    }, 10000);
  });

  console.log("promise 1 completed");
}
module.exports = callAPI;
