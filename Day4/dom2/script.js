// const element = document.getElementsByTagName("div");
// console.log(element);

// const c = document.querySelector("p");
// // c.removeChild(c);
// const d = document.getElementsByTagName("p");
// element[1].removeChild(d[1]);

// element.remove();

// function getInfo(e) {
//   console.log(e);
//   const element = document.querySelector("p");
//   const el = document.createElement("p");
//   el.innerHTML = "My name is rakshit";
//   element.prepend(el);
// }
// const button = document.getElementById("btn");
// button.onclick = function () {
//   button.style.backgroundColor = "red";
// };
function getInfo(e) {
  //   e.target.setAttribute("style", "background-color:blue");
  e.target.style.backgroundColor = "green";
  e.target.style.color = "red";
}
