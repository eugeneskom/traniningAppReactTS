const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const uri = `mongodb+srv://${encodeURIComponent("85rk9521")}:${encodeURIComponent("k0izyeU15HQg80qk")}@cluster0.txyufdi.mongodb.net/?retryWrites=true&w=majority`;
async function connect() {
  try{
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  }catch(err){
    console.log(err)
  }
}

connect()

app.use(cors());
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  // code to fetch data from the server
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
