const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const URL = "/HJvWnYLCD9jEjnyt2bvuDQj5jJkWWw8hNZpoUfUJcsf6";

app.get(URL, (req, res) => {
  // Send the HTML file that performs the redirection
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "redirect.html"));
  }, "3000");
});

app.get("/", (req, res) => {
  res.redirect(URL);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
