import express from 'express';
import { signIn, createUser } from '../controllers/user.js';


const router = express.Router();

router.post('/signIn', signIn);
router.post('/signUp', createUser);

export default router;