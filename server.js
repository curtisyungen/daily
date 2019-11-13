const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send();
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
