import mongoose from "mongoose";
//comment schema and modal
const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    video : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{timestamps:true});

export const Comment = mongoose.model("comment",commentSchema);