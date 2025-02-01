import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps: true
});
export const AdminModel = mongoose.model("AdminModel", AdminSchema);
