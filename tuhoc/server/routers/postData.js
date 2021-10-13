import express from 'express';
import { getPostData, createData } from '../controllers/postData.js'; 

const router = express.Router();

router.get('/', getPostData);
router.post('/', createData);

export default router;