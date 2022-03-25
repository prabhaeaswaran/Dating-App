const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const appRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", appRoutes.routes);

app.listen(config.port, () => {
  console.log("Service endpoint= %s", config.url);
});
