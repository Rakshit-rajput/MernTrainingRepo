const express = require("express");
const app = express();
const data = require("./data.json");
const fs = require("fs");

const htmlTemplate = fs.readFileSync("./templates/page.html", "utf-8");
const cardTemplate = fs.readFileSync("./templates/card.html", "utf-8");
const navbarTemplate = fs.readFileSync("./templates/navbar.html", "utf-8");
const footerTemplate = fs.readFileSync("./templates/footer.html", "utf-8");
const productDetailTemplate = fs.readFileSync(
  "./templates/product-detail.html",
  "utf-8"
);
const products = data.products;
const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("__TITLE__", elem.title);
  newCard = newCard.replace("__INFO__", elem.description);
  newCard = newCard.replace("__IMAGE__", elem.thumbnail);

  newCard = newCard.replace("__URL__", `/product/${elem.id}`);
  return newCard;
});
const allCardsString = allCards.join(" ");
const page = htmlTemplate
  .replace("__PRODUCTS_CARDS__", allCardsString)
  .replace("__NAVBAR__", navbarTemplate)
  .replace("__FOOTER__", footerTemplate);

//Home Page

app.get("/", (req, res) => {
  res.send(page);
});

//Product detail Page
app.get("/product/:id", (req, res) => {
  const productId = req.params.id.replace(":", "");
  //   console.log("Product ID:", productId);
  //   console.log(
  //     "Product IDs from data:",
  //     products.map((p) => p.id)
  //   );
  const product = products.find(
    (p) => p.id.toString() === productId.toString()
  );
  //   console.log("FOund Product:", product);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  const productHtml = productDetailTemplate
    .replace("__TITLE__", product.title)
    .replace("__DESCRIPTION__", product.description)
    .replace("__PRICE__", product.price)
    .replace("__IMAGE__", product.thumbnail);
  const detailPage = htmlTemplate
    .replace("__PRODUCTS_CARDS__", productHtml)
    .replace("__NAVBAR__", navbarTemplate)
    .replace("__FOOTER__", footerTemplate);

  res.send(detailPage);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
