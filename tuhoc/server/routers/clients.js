import express from 'express';
import { getDataClient, createClient} from '../controllers/clients.js';


const router = express.Router();

router.get('/getDataClient', getDataClient);
router.post('/createClient', createClient);

export default router;