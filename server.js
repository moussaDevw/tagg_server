const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./out")));

app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname, "./out", "blog.html"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "./out", "services.html"));
});

app.get("/qui-sommes-nous", function (req, res) {
  res.sendFile(path.join(__dirname, "./out", "qui-sommes-nous.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "./out", "contact.html"));
});

const unknownEndpoint = (request, response) => {
  response.status(404).sendFile(path.join(__dirname, "./out", "404.html"));
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(port));
