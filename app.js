const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Routes = require("./src/routes");
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", Routes.Home);

app.listen(PORT, () => {
  console.clear();
  console.log(`[⚡] Server is running in http://localhost:${PORT}/`);
});
