import mangoose from 'mongoose';
export { User };

const User = mangoose.model('User', {
// Modelo de estrutura de dados para um novo usuário

    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
