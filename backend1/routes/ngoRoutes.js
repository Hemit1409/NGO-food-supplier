import express from "express";
import { ngoRegister, ngoLogin, ngoLogout } from "../controllers/ngoController.js";

const router = express.Router();

router.post("/register", ngoRegister);
router.post("/login", ngoLogin);
router.post("/logout", ngoLogout);

export default router;
