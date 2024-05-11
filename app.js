const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/redirect", (req, res) => {
  // Send the HTML file that performs the redirection
  res.sendFile(path.join(__dirname, "redirect.html"));
});

// This route will serve as the URL you want to display
app.get("/desired-url", (req, res) => {
  // You can simply render a template or send any response you want
  res.send("This is the content you want to display for the desired URL.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
