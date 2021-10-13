import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
}, {timestamps: true })

export const postDataModel = mongoose.model('Post', schema)