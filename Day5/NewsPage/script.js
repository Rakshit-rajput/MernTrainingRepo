const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=8a28078505b14beba1722cf0cd87d2bb";
function callAPI() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderUI(data);
    });
}
function CreateCard(title, description, url, imageUrl, content) {
  //Apply inline styles to individual elements

  // Corrected variable names and removed unused variables
  const cardTitle = title;
  const cardDescription = description;
  const cardImg = imageUrl; // Corrected variable name
  const cardContent = content;

  // Creating the card container
  const div = document.createElement("div");
  div.classList.add("card"); // Add a CSS class for styling
  const root = document.getElementById("root");
  root.appendChild(div);

  // Adding title to the card
  const heading = document.createElement("h1");
  heading.innerText = cardTitle;
  div.appendChild(heading);

  // Adding image to the card
  const imgElement = document.createElement("img");
  imgElement.src = cardImg;
  div.appendChild(imgElement);

  // Adding description to the card
  const desc = document.createElement("p");
  desc.innerText = cardDescription;
  div.appendChild(desc);

  // Adding content to the card
  const contentElement = document.createElement("p");
  contentElement.innerText = cardContent;
  div.appendChild(contentElement);
}

function renderUI(data) {
  const articles = data.articles;

  articles.forEach((ar) => {
    // Pass the correct arguments to CreateCard function
    CreateCard(ar.title, ar.description, ar.url, ar.urlToImage, ar.content);
  });
}

callAPI();
