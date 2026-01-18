import mongoose from "mongoose";
//connection to mongoDB
mongoose.connect("mongodb://localhost:27017/youtubeBackend").then(()=>
{
    console.log("Connected to MongoDB");
}).catch((err)=>
{
    console.log("Error connecting to MongoDB:", err);
});