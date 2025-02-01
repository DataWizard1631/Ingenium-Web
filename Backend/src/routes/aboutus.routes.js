import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  addMember,
  removeMember,
  updateMember,
  getMembers,
  getMemberById,
} from "../controllers/aboutus.controller.js";
const router = Router();

router
  .route("/about-us")
  .post(upload.single("image"), addMember)
  .get(getMembers);
router.route("/:id").put(updateMember).delete(removeMember).get(getMemberById);

export default router;
