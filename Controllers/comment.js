import {Comment} from '../Modals/comment.js';

// Add a comment to a video
export const addComment=async(req,res)=>{   
    try{
            let {video, message}=req.body;
            const comment=new Comment({ user :  req.user._id, video, message});
            await comment.save();
            res.status(200).json({message:"Comment added successfully", comment});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}
// Get comments for a specific video
export const getCommentsByVideoId=async(req,res)=>{
   try{
           let {videoId}=req.params;
           const comments=await Comment.find({video:videoId}).populate('user','channelName profilePic userName createdAt');
           res.status(200).json({comments});
   }
   catch(error){
    res.status(500).json({message:"Internal server error"});
   }

}