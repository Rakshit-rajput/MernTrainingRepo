const heading = document.getElementById("heading");
console.log(heading);
heading.innerHTML = "This is Heading using DOM";
// console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);

// console.log(window.innerHeight);
// console.log(window.document);
// console.log(window);
// console.dir(window.document);
// console.dir(window);

// const head1 = document.getElementsByTagName("div");
// head[0].innerHTML = "<h4> Changes</h4>";

const ne = document.createElement("h3");
console.log(ne);
ne.innerText = "Texting";
// console.log(ne);
// document.body.appendChild(ne);

const firstdiv = document.getElementsByTagName("div");
firstdiv[0].appendChild(ne);
ne.remove();
