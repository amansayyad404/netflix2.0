import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register); //register function will be called from controller
router.route("/login").post(Login);  //login function will be called from controller
router.route("/logout").get(Logout)//logout function will be called from controller

export default router;