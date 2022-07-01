const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const StudentRoutes = require("./routes/student")
const cors = require('cors');
const PORT =  process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.static("build"));
app.use(express.static(path.resolve(__dirname, "./client/build")));


// Extra thing
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})


const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL, (err) => {
  if(err){
    console.log("There was an error to connect mongodb");
  }else{
    console.log("Succesfully connected to mongodb 🌈")
  }
})

app.get("/", (req, res) => {
  res.send("Hi test CRUD");
});

app.use("/students", StudentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT} 🐣`);
})