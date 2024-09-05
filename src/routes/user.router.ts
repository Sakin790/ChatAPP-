import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();
router.route("/status").get(userController.register);

export { router };
