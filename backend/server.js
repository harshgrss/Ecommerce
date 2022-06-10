const app=require("./app");
//const dotenv=require("dotenv");
const cloudinary = require("cloudinary")
const connectDatabase=require("./config/database")

// Handling Uncaught Exception(any unnessary things type in between the code)
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
//connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


   const server=app.listen(process.env.PORT,() => {
     console.log(`server is working on http://localhost:${process.env.PORT}`)
 })
 

 //Unhandle promise rejection(for example config env prob)
 process.on("unhandledRejection",err=>{
   console.log(`Error:${err.message}`);
   console.log(`shuttting down the server due to unhandled promise rejection`);
   server.close(()=>{
     process.exit(1);
   })

 })

