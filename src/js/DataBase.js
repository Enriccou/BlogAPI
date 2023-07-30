import { mongoose } from "mongoose";

const url = 'mongodb+srv://Enriccou:150620@blogapi.bpnis0s.mongodb.net/?retryWrites=true&w=majority';

export function ConnectMongoDB() {
    try {

        mongoose.connect(url);
        console.log('Connected to MongoDB');

    } catch (error) {

        console.error('Error connecting to MongoDB:', error);
        
    }
}
