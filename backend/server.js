const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/movies/", moviesRoutes);

//connection a la base de donnees  !

// get post put delete

mongoose
  .connect(
    "mongodb+srv://hichem123:hichem123@cluster0.cv5kb42.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("erreur lors de la connection au database");
  });

app.listen(5000, () => {
  console.log("serveur en marche");
});
