import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express"
import SeedRouter from "./Routes/SeedRouter.js"; 
import typeDefs from "./typeDefs.js" 
import resolvers from "./Resolvers.js"; 

dotenv.config() // dotenv configuration

const app = express() // Create an Express application
app.use(cors()) // middleware use
app.use(express.json()) // middleware use
app.use(express.urlencoded({ extended: true })); // middleware use


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }) // connected to the mongodb using mongoose
  .then(() => {
    console.log("connected to the db")
  }).catch((err) => {
    console.log(err)
  })


const server = new ApolloServer({ // connected to the apolloserver
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production', // Enable introspection in non-production environments
  playground: process.env.NODE_ENV !== 'production', // Enable playground in non-production environments
});

server.start().then(() => {// Apply Apollo Server as middleware to Express
  server.applyMiddleware({ app });
});

app.use("/api/seed", SeedRouter) // all available routes are here

app.get("/", (req, res) => { // here is your rest api 
  res.send("it's perfectly works")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}${server.graphqlPath}`)
})