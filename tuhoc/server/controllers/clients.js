import { client } from '../models/clients.js';


export const getDataClient = async (req, res) => {
    try {
        const data = await clients.find();
        res.send(data);
        console.log('ok');
    } catch (error) {
        console.log(error);
    }
};

export const createClient = async (req, res) => {
    try {
        const data = new clients(req.body);
        await data.save();
        res.send('ok');
    } catch (error) {
        console.log(error);
    }
}