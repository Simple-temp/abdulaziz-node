import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import SeedRouter from "./Routes/SeedRouter.js";
import typeDefs from "./typeDefs.js";
import resolvers from "./Resolvers.js";
import { graphqlUploadExpress } from "graphql-upload";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config() 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express() 
app.use(cors()) 
app.use(express.json()) 
app.use(express.urlencoded({ extended: false })); 
app.use(graphqlUploadExpress());
app.use('/uploads', express.static(join(__dirname, 'uploads'))); 


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => {
    console.log("connected to the db")
  }).catch((err) => {
    console.log(err)
  })


const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production', 
  playground: process.env.NODE_ENV !== 'production', 
});

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.use("/api/seed", SeedRouter) 

// const upload = multer({ dest: 'uploads/' });
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.json({ file: req.file });
// });

app.get("/", (req, res) => { // here is your rest api 
  res.send("it's perfectly works")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}${server.graphqlPath}`)
})
