import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { router } from './Routes/MainRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use('/', router);

try {

    mongoose.connect('mongodb+srv://Enriccou:150620@blogapi.bpnis0s.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {

    console.log(error.menssage);

}

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
