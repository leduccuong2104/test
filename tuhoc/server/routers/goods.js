import express from 'express';
import { getDataGoods, createGoods, getEditGoods} from '../controllers/goods.js';


const router = express.Router();

router.get('/getDataGoods', getDataGoods);
router.post('/createGoods', createGoods);
router.get('/editDataGoods/:id', getEditGoods);

export default router;