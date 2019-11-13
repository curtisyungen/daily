const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/days", (req, res) => {
  const days = [
    { id: 1, complete: false },
    { id: 2, complete: false },
    { id: 3, complete: false }
  ];

  res.json(days);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
