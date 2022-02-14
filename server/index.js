const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./db.json");
const { generateRandomAssetData } = require("./utils");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Price feed home page.");
});

app.get("/assets", (req, res) => {
  const updated = db.assets.map((asset) => ({
    ...asset,
    price: Math.round(asset.price * (Math.random() + 0.5)),
    volume: Math.round(asset.volume * (Math.random() + 0.5)),
  }));
  res.json(updated);
});

app.post("/assets", (req, res) => {
  const { name, symbol } = req.body;
  const asset = generateRandomAssetData(name, symbol);
  db.assets.push(asset);
  res.json(asset);
});

app.listen(3001);
