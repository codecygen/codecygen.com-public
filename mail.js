const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.email,
    pass: process.env.password
  }

});

exports.sendMail = function(name, company, email, phone, message, emailTo, emailTitle, cb) {
  const mailOptions = {
    to: emailTo,
    subject: emailTitle,
    html: `Full Name: ${name}<br>Company: ${company}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}
