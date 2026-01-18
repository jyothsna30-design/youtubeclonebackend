import express from 'express';
import { signUp , signIn ,logOut } from '../Controllers/user.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', signIn);
router.post('/logout', logOut);

export default router;