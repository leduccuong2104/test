import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postData from './routers/postData.js';
import mongoose from 'mongoose';
import user from './routers/user.js';
import goods from './routers/goods.js';
import clients from './routers/clients.js';

const URI = 'mongodb+srv://tuhoc:3Qz8LQKBWyZTtdx2@cluster0.b7ss5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors());

app.use('/postData', postData);
app.use('/user', user);
app.use('/goods', goods);
app.use('/clients', clients);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connect mongoose :)');
    app.listen(PORT, () => {
        console.log(`Start server :) ${PORT}`);
    });
})
.catch((err) => {
    console.log('Err', err);
})
