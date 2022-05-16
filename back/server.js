const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const api = require("./routes");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_PORT;

app.use(parser.json());
app.use(cors());
app.use("/api", api);
app.use("/images", express.static("public/images"));
app.use("/videos", express.static("public/videos"));
app.use(parser.urlencoded({extended: true,}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Page d'accueil du Back");
});

const server = app.listen(parseInt(SERVER_ADDRESS), () => {
    console.log(`Serveur Back à l'écoute sur le port ${SERVER_ADDRESS}`);
  });

module.exports = server;
