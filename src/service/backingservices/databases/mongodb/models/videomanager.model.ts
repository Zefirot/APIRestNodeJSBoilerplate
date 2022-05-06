import mongoose from 'mongoose';
import { videoDB } from '..';

const {Schema, Types} = mongoose;

const VideoManagerSchema = new Schema({
    firstName : {type: String, required:true},
    userId : {type: Types.ObjectId, required:true, unique:true},
    email : {type:String, lowercase:true},
    role : {type:String},
    password : {type:String},
},{
    timestamps:true,
});

const VideoManagerModel = videoDB.model('videomanager', VideoManagerSchema);

export default VideoManagerModel;

