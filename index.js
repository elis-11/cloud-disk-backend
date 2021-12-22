const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://elis1:elis@cluster0.gzwcn.mongodb.net/todo?retryWrites=true&w=majority',
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
