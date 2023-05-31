import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
// express routes
import SeedRouter from "./Routes/SeedRouter.js";


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

// all available routes are here
app.use("/api/seed", SeedRouter)

app.get("/",(req, res)=>{
  res.send("it's perfectly works")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})