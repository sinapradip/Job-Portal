import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;