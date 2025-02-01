import mongoose from "mongoose";
import jwt from "jsonwebtoken";
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
AdminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET
  );
  return token;
};
export const AdminModel = mongoose.model("AdminModel", AdminSchema);
