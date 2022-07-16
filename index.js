const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const fileUpload = require("express-fileupload");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use(express.static("static"));
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //         const PORT = process.env.PORT || 5000
    // console.log({ PORT })
    // app.listen( PORT, () => console.log(`API started on http://localhost:${PORT}`) )

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
      // console.log('Server started on port ', PORT)
    });
  } catch (e) {
    console.log(e);
  }
};

start();
