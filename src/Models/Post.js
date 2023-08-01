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

});
