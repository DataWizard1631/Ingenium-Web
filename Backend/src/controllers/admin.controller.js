import { asyncHandler, ApiError, ApiResponse } from "../utils/allUtils.js";
import { AdminModel } from "../models/admin.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const addAdmin = asyncHandler(async (req, res) => {
  const { email} = req.body;
  if (!email) {
    throw new ApiError(400, "Please fill all the fields");
  }

  const adminExists = await AdminModel.findOne({ email });
  if (adminExists) {
    throw new ApiError(400, "Admin already exists");
  }
  const password = process.env.ADMIN_PASSWORD;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const admin = await AdminModel.create({
    email,
    password: hashedPassword,
  });

  const token = admin.generateAuthToken();
  if (!token) {
    throw new ApiError(500, "Token generation failed");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { token, admin }, "Admin created successfully"));
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

  const token = admin.generateAuthToken();

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensures secure cookies in production
      sameSite: "Strict",
    })
    .json(
      new ApiResponse(200, { token, admin }, "Admin logged in successfully")
    );
});

const logoutAdmin = asyncHandler(async (req, res) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  // If no token exists, return an error
  if (!token) {
    throw new ApiError(400, "No token provided");
  }

  // Clear the cookie in the response
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Ensures secure cookies in production
    sameSite: "Strict", // Makes sure cookies are not sent with cross-site requests
  });

  // Optionally, you could also handle server-side session invalidation if you’re using a session store.
  
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
  const admin = await AdminModel.find().select("email _id");
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
  logoutAdmin,
};
