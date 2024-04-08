const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=L35XE7EBRMAGCEPZCGV8M4XGN";

function fetchAPI(url) {
  fetch(url).then((res) => {
    res = res
      .json()
      .then((data) => {
        renderUI(data);
      })
      .catch(console.error);
  });
}
const root = document.getElementById("root");

function renderUI(data) {
  const days = data.days;
  console.log(days);
  const row = document.createElement("tr");
  let cell1 = document.createElement("th");
  cell1.innerText = "Date";
  row.appendChild(cell1);
  let cell2 = document.createElement("th");
  cell2.innerText = "Temperature";
  row.appendChild(cell2);
  root.appendChild(row);
}
fetchAPI(url);
