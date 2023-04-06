const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const pswrd = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${encodeURIComponent("85rk9521")}:${encodeURIComponent("k0izyeU15HQg80qk")}@cluster0.txyufdi.mongodb.net/training?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log(err)
  }
}

connect()

const dataSchema = new mongoose.Schema({
  id: { type: String, required: true },
  exercise: { type: String, required: true },
  times: { type: Number, required: true },
});

const DataModel = mongoose.model('Data', dataSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/api/training", async (req, res) => {
  const { id, exercise, times } = req.body;
  const newData = new DataModel({ id, exercise, times });
  try {
    const savedData = await newData.save();
    console.log(savedData);
    res.status(200).send(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/api/training", async (req, res) => {
  try {
    const data = await DataModel.find({}).select('-__v').lean();
    const newData = data.map(item => {
      item.id = item._id;
      delete item._id;
      return item;
    });
    console.log(newData);
    res.status(200).send(newData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});