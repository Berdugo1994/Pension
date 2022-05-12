// server/index.js

//.env file config
const dotenv = require("dotenv");
dotenv.config();

//route
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
console.log("PORT IS", PORT);
const app = express();

//serve client-build files.
app.use(express.static("client/build"));

var apiRoute = require("./routes/api");
app.use("/api", apiRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Server listening on ${PORT}.\nPlease make sure React proxy set to ${PORT} as well!`
  );
});
