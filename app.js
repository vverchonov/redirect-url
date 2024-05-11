const express = require("express");
const app = express();
const http = require("http");
const url = require("url");

app.get("/random-url", (req, res) => {
  // Define the external URL to redirect to
  const externalURL =
    "https://www.pump.fun/4inoptdokTnnH5cU64CP64WQbeV6gdFUVmiokPfwzbsL";

  // Proxy the request to the external URL
  const options = {
    hostname: url.parse(externalURL).hostname,
    path: url.parse(externalURL).pathname,
    method: "GET",
  };

  const externalRequest = http.request(options, (externalResponse) => {
    // Pass the external server's response back to the client
    res.writeHead(externalResponse.statusCode, externalResponse.headers);
    externalResponse.pipe(res);
  });

  externalRequest.on("error", (err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });

  externalRequest.end();
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
