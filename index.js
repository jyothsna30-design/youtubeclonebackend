import express from 'express';
import './Connection/conn.js';
import cookieParser from 'cookie-parser';
import userRouter from './Routes/user.js';
import videoRouter from './Routes/video.js';
import commentRouter from './Routes/comment.js';
import authenticate from './middleware/authentication.js';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use('/auth', userRouter);
app.use('/api', videoRouter);
app.use('/commentapi', commentRouter);

//defining port and listening to server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});



