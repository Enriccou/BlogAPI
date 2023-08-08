import mongoose from 'mongoose';
export { Post };

const Post = mongoose.model('Post', {
// Modelo de estrutura de dados para um novo post

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    references: {
        type: Array,
        required: false,
    },
    tags: {
        type: Array,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString(),
    },


});
