import mongoose from 'mongoose';

const {CREDENTIAL_BACKING_DB_MONGO_URI = 'mongodb://localhost:27017//test'} = process.env;

const videoDB = mongoose.createConnection(CREDENTIAL_BACKING_DB_MONGO_URI);

export {
    videoDB,
};