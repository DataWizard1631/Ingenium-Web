import express from "express";
import {
  addAdmin,
  loginAdmin,
  removeAdmin,
  updateAdmin,
  getAdminById,
  getAdmin,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.route("/").post(addAdmin).get(getAdmin);
router.route("/login").post(loginAdmin);
router.route("/:id").put(updateAdmin).delete(removeAdmin);
router.route("/:id").get(getAdminById);

export default router;
