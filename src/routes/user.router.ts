import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/status").get(userController.status);
router.route("/register").post(userController.register);

export { router };
