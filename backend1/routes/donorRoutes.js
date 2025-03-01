// import express from "express";
// import { register , logout } from "../controllers/donorController.js";

// const router=express.Router();

// // router.post("/register", register)
// // router.post("/login", login)
// // router.post("/logout", logout)
// router.post("/register",register);
// router.delete('/logout/:id' , logout);
// export default router;

import express from "express";
import { donorRegister, donorLogin, donorLogout } from "../controllers/donorController.js";

const router = express.Router();

router.post("/register", donorRegister);
router.post("/login", donorLogin);
router.post("/logout", donorLogout);

export default router;
