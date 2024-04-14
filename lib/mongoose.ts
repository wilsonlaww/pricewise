import mongoose from 'mongoose'

let isConnected = false; //track connection status

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined');

    if(isConnected) return console.log('=> using exisiting database conection');

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error)
        
    }
}