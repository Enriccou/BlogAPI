import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { router } from './Routes/MainRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use('/', router);

try {
//Tentativa de conexão com o banco de dados mongoDB utilizando meu usuário e senha

    mongoose.connect('mongodb+srv://Enriccou:150620@blogapi.bpnis0s.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {

    console.log(error.menssage);

}

// Inicialização do servidor local em express
app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${3000}`);
});
