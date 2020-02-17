const nodemailer = require("nodemailer");
const pug = require("pug");

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

  //Renderizar el HTML del email desde un template pug
  const html = pug.renderFile(`${__dirname}/../views/email/mensaje.pug`, {
    nombre: formData.nombre,
    email: formData.email,
    mensaje: formData.mensaje
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_TO,
    subject: "Mensaje del portafolio",
    html: html
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendMail;