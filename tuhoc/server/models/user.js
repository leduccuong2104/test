import mongoose from 'mongoose';

const shema = new mongoose.Schema({
    numberPhone: {
        type: Number,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    group: {
        type: String,
        require: false,
    }
})

export const user = mongoose.model('User', shema)