require("dotenv").config();
const express = require("express");
const cors = require('cors')

const connectDB = require("../Backend/src/config/db");
const userRouter = require("./src/routes/user.routes");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors())
app.use(express.json());
connectDB();

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server is Running on", PORT);
});
