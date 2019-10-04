const nodemailer = require("nodemailer");

const sendMail = async (formData) => {
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: "Mi Portafolio",
    to: process.env.EMAIL_TO,
    subject: "Mensaje del portafolio",
    text: JSON.stringify(formData)
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendMail;