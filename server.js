const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./dist/synvia-pokedex"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/synvia-pokedex/index.html"));
  res.sendFile('index.html', {root: 'synvia-pokedex'})
});
app.listen(process.env.PORT || 8080);
