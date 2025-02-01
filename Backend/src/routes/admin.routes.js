import express from "express";
import { addAdmin,loginAdmin,removeAdmin,updateAdmin,getAdminById } from "../controllers/admin.controller";

const router = express.Router();

router.route("/").post(addAdmin);
router.route("/login").post(loginAdmin);
router.route("/:id").put(updateAdmin).delete(removeAdmin);
router.route("/:id").get(getAdminById);

export default router;
