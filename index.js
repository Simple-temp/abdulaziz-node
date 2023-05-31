import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
import fakedata from './fakedata.js';


// dotenv configuration
dotenv.config()

// middleware use
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// connected to the mongodb using mongoose
mongoose.connect(process.env.MONGO_DB)
.then(() => {
  console.log("connected to the db")
}).catch((err)=>{
  console.log(err)
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})