import { asyncHandler, ApiError, ApiResponse } from "../utils/allUtils.js";
import { AdminModel } from "../models/admin.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const addAdmin = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "Please fill all the fields");
  }
  const adminExists = await AdminModel.findOne({ email });
  if (adminExists) {
    throw new ApiError(400, "Admin already exists");
  }
  const password = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
  const admin = await AdminModel.create({
    email,
    password: password,
  });
  return res
    .status(201)
    .json(new ApiResponse(201, admin, "Admin created successfully"));
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "Please fill all the fields");
  }
  const admin = await AdminModel.findOne({ email });
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }
  const isMatch = bcrypt.compareSync(password, admin.password);
  if (!isMatch) {
    throw new ApiError(400, "Invalid credentials");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, admin, "Admin logged in successfully"));
});
const logoutAdmin = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, null, "Admin logged out successfully"));
    });

const updateAdmin = asyncHandler(async (req, res) => {
  const admin = await AdminModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, admin, "Admin updated successfully"));
});
const removeAdmin = asyncHandler(async (req, res) => {
  const admin = await AdminModel.findByIdAndDelete(req.params.id);
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Admin deleted successfully"));
});
const getAdminById = asyncHandler(async (req, res) => {
  const admin = await AdminModel.findById(req.params.id);
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, admin, "Admin fetched successfully"));
});

const getAdmin = asyncHandler(async (req, res) => {
  const admin = await AdminModel.find();
  return res
    .status(200)
    .json(new ApiResponse(200, admin, "Admin fetched successfully"));
});

export {
  addAdmin,
  loginAdmin,
  removeAdmin,
  updateAdmin,
  getAdminById,
  getAdmin,
  logoutAdmin
};
