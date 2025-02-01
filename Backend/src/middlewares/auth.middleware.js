import jwt from "jsonwebtoken";
import { asyncHandler, ApiError } from "../utils/allUtils.js";
import { AdminModel } from "../models/admin.model.js";

const auth = asyncHandler(async (req, res, next) => {
  let token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  
  // Check if token exists
  if (!token) {
    throw new ApiError(401, "Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await AdminModel.findById(decoded._id);

    if (!req.admin) {
      throw new ApiError(401, "Admin not found");
    }
    
    next();
  } catch (err) {
    throw new ApiError(401, "Unauthorized");
  }
});

export default auth;
