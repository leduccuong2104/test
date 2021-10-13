import mongoose from 'mongoose';

const shema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    money: {
        type: Number,
        required: true,
    },
    bill: {
        type: Object,
        require: true,
    }
})

export const client = mongoose.model('Client', shema)