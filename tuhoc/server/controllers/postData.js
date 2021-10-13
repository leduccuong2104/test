import { postDataModel } from '../models/postDataModel.js'

export const getPostData = async (req, res) => {
    try {
        const data = await postDataModel.find();
        console.log('data', data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

export const createData = async (req, res) => {
    try {
        const data = new postDataModel(req.body);
        await data.save();
        res.send('ok');
    } catch (error) {
        console.log(error);
    }
}