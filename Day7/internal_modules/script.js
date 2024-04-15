// const b = new Buffer.from("Aabc");
// console.log(b.toString());
// b.write("Other");
// console.log(b.toString());

// const fs = require("fs");
// fs.writeFileSync("./test.txt", "Hello World!", "utf8");

// const fsPromises = require("fs/promises");
// console.log("start");
// const pr = fsPromises.readFile("./test.txt", "utf8");
// pr.then((res) => {
//   console.log(res);
//   console.log("end");
// });

// const fs = require("fs");
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("Request received");
//   console.log(req.url);
//   res.writeHead(200, {
//     "content-type": "text/html",
//   });
//   res.end("<h1>Hello World</h1>");
// });
// server.listen(5000);

//MINI PROJECT

// const http = require("http");

// const cardTemplate = `
// <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">Card Template</div>`;

// const htmlTemplate = `<!DOCTYPE html><html>
//   <head><title>Home Page</title></head><body><h1>Home Page</h1><a href='/about'>About</a><a href='/contact'>Contact</a><a href='/services'>Services</a><a href='/portfolio'>Portfolio</a><a href='/blog'>Blog</a><a href='/pricing'>Pricing</a>${cardTemplate}</body></html>`;

// const server = http.createServer((req, res) => {
//   console.log("Request received");
//   console.log(req.url);

//   res.writeHead(200, {
//     "content-type": "text/html",
//   });

//   res.end(htmlTemplate);
// });

// server.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
const htmlTemplate = fs.readFileSync("./templates/page.html", {
  encoding: "utf-8",
});
const cardTemplate = fs.readFileSync("./templates/card.html", "utf-8");
const navbarTemplate = fs.readFileSync("./templates/navbar.html", "utf-8");
const footerTemplate = fs.readFileSync("./templates/footer.html", "utf-8");

const products = JSON.parse(data).products;
const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("__TITLE__", elem.title);
  newCard = newCard.replace("__INFO__", elem.description);
  newCard = newCard.replace("__IMAGE__", elem.thumbnail);
  newCard = newCard.replace("__URL__", elem.url);
  return newCard;
});
const allCardsString = allCards.join(" ");
const page = htmlTemplate
  .replace("__PRODUCTS_CARDS__", allCardsString)
  .replace("__NAVBAR__", navbarTemplate)
  .replace("__FOOTER__", footerTemplate);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(page);
});
server.listen(1500, () => {
  console.log("...........server Started................");
});
