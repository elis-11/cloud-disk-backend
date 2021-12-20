const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://elis2:elis@cluster0.eoohx.mongodb.net/todo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );

    app.listen(PORT, () => {
      console.log(`Server stated on port ${PORT}`);
    });
  } catch (err) {
    console.err(err);
  }
}
start();
