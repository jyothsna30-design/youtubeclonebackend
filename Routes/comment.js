import express  from 'express';
import {addComment, getCommentsByVideoId} from '../Controllers/comment.js';
import authenticate from '../middleware/authentication.js';
const router = express.Router();
router.post('/comment',authenticate,addComment);
router.get('/comment/:videoId',getCommentsByVideoId);


export default router;
