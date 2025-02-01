import { Schema } from "mongoose";
import mongoose from "mongoose";

const AdminSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});
export default mongoose.model("Admin", AdminSchema);
