const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/streaks", (req, res) => {
  const streaks = [
    {
      id: 1,
      title: "Streak 1",
      days: [0, 0, 1, 1, 1]
    },
    {
      id: 2,
      title: "Streak 2",
      days: [1, 1, 1, 1, 1]
    }
  ];

  res.json(streaks);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
