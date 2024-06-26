const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// }

app.use(routes);
app.use("/", (req, res) => {
  res.status(200).json("HELLO");
});

// try {
//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });
// } catch (error) {
//   console.log(error);
// }

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
