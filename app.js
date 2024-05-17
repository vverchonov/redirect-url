const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // Send the HTML file that performs the redirection
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "redirect.html"));
  }, "3000");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
