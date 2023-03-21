const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

const contactEmail = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: "avrilm.1@hotmail.co.uk",
    to: "avrilm.1@hotmail.co.uk",
    subject: "Contact Form Submission",
    html: `<p>First Name: ${firstName}</p>
           <p>Last Name: ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
