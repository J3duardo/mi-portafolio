const express = require("express");
const cors = require("cors");
const path = require("path");
const emailSender = require("./utils/emailSender");
const dotenv = require("dotenv");

dotenv.config({path: "./config.env"})

const app = express();
const port = process.env.PORT || 5000;

//Establecer el view engine y las rutas a los views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());


app.post("/", async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;

    if(!nombre || !email || !mensaje) {
      res.status(400).json({
        message: "Completar todos los campos"
      })
    }

    await emailSender({nombre, email, mensaje});
    
    res.status(200).json({
      message: "Email enviado con éxito"
    })

  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Server error"
    })
  }
})

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
});

app.listen(port, (error) => {
  if(error) {
    throw error;
  }
  console.log(`Server running on port ${port}`)
});