import express from 'express';
import { addVideo, getVideos, getVideosById, getVideosByUserID} from '../Controllers/video.js';
import authenticate from '../middleware/authentication.js'
const router = express.Router();
// Video routes
router.post('/video', authenticate, addVideo);
router.get('/allvideo', getVideos);
router.get('/video/:id', getVideosById);
router.get('/:userId/channel', getVideosByUserID);

export default router;