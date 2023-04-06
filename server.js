const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const nodemailer = require("nodemailer");

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
const transporter = nodemailer.createTransport({
  host: "mail.taggue.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@taggue.com",
    pass: "Eternel@vie1",
  },
});

app.post("/v1/contact", (req, res) => {

  const { fullname, email, subject, body } = req.body;

  const message = {
    from: "contact@taggue.com",
    to: "contact@taggue.com",
    subject: subject,
    html: `<h3>Vous avez réçu un mail de ${fullname} sont adresse email est <a href="mailto:${email}">${email}</a></h3> <br> ${body}`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error(`Error occured: ${error}`);
      return process.exit(0);
    }
    res.status(201).json("Message envoyer");
  });
});
// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(port));
