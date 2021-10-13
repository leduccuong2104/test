import mongoose from 'mongoose';

const shema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    group: {
        type: String,
        require: true,
    }
})

export const goods = mongoose.model('Goods', shema);