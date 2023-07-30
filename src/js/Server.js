import express from 'express';
import { ConnectMongoDB } from './DataBase.js';

const PORT = 3000;
const app = express();

ConnectMongoDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
