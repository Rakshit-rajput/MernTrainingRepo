const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data);
console.log(dataObj.products.length);

constCardTemplate = `
<div class = 'product-card'>
<h3>title</h3>
</div>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("Hello from server");
});
server.listen(1500, () => {
  console.log("Server is running on port 1500");
});
