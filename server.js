const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/streaks", (req, res) => {
  const streaks = [
    {
      id: 1,
      title: "Streak 1",
      days: [
        {
          date: "11/01/2019",
          complete: false
        },
        {
          date: "11/02/2019",
          complete: true
        }
      ]
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
