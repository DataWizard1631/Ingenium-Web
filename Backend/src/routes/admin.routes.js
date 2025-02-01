import express from "express";
import {
  addAdmin,
  loginAdmin,
  removeAdmin,
  updateAdmin,
  getAdminById,
  getAdmin,
  logoutAdmin,
} from "../controllers/admin.controller.js";

const router = express.Router();


router.route("/").post(addAdmin).get(getAdmin); // Protect the getAdmin route with auth
router.route("/logout").get(logoutAdmin); // Make logout route explicit and protected

router.route("/login").post(loginAdmin);

// Routes to handle a specific admin based on ID
router.route("/:id").get(getAdminById) // Protect the getAdminById route
  .put(updateAdmin) // Protect updateAdmin route
  .delete(removeAdmin); // Protect removeAdmin route

export default router;
