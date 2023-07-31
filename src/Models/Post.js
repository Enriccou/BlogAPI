import mongoose from 'mongoose';
export { Post };

const Post = mongoose.model('Post', {

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
// O código acima é um modelo de como deve ser criado um modelo de dados no Mongoose.