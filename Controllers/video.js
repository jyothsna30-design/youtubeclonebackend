import { Video } from "../Modals/video.js";
export const addVideo=async(req,res)=>{
    try {
        const {title,description,videoLink,category,thumbnail}=req.body;
        const newVideo=new Video({ user:req.user._id,title,description,videoLink,category,thumbnail});
        await newVideo.save();
        res.status(201).json({message:"Video added successfully",video:newVideo});
    }
    catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export const getVideos=async(req,res)=>{
    try {
        const videos=await Video.find().populate('user','channelName profilePic userName createdAt');
        res.status(200).json({videos});}
     catch (error) {
        res.status(500).json({message:"Internal server error"});  }

    }

export const getVideosById=async(req,res)=>{
    try {
        let {id}=req.params;
        const video=await Video.findById(id).populate('user','channelName profilePic userName createdAt');
        res.status(200).json({video});
    }
        catch (error) {
        res.status(500).json({message:"Internal server error"});  }
        }


export const getVideosByUserID=async(req,res)=>{
    try {
        let {userId}=req.params;
        const videos=await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt');
        res.status(200).json({videos});
    }
    catch (error) {
        res.status(500).json({message:"Internal server error"});  } 
}
