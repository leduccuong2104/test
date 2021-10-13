import { goods } from '../models/goods.js';


export const getDataGoods = async (req, res) => {
    try {
        const data = await goods.find();
        res.send(data);
        console.log('ok');
    } catch (error) {
        console.log(error);
    }
};

export const getEditGoods = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await goods.find({_id: id});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

export const createGoods = async (req, res) => {
    try {
        const data = new goods(req.body);
        await data.save();
        res.send('ok');
    } catch (error) {
        console.log(error);
    }
}