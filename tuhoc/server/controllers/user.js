import { user } from '../models/user.js';

export const signIn = async (req, res) => {
    let { numberPhone, pass } = req.body;
    console.log(numberPhone, pass);
    // try {
    //     const data = await user.find();
    //     console.log('data', data);
    //     res.send(data);
    // } catch (error) {
    //     console.log(error);
    // }
};

export const createUser = async (req, res) => {
    try {
        const data = new user(req.body);
        await data.save();
        res.send('ok');
    } catch (error) {
        console.log(error);
    }
}