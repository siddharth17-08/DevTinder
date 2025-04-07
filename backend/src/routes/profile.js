import { Router } from "express";
import { userAuth } from "../middlewares/auth.js";
import { changePassword, editProfile, viewProfile } from "../controllers/profile.js";

const profileRouter = Router();
profileRouter.get("/view", userAuth, viewProfile);
profileRouter.patch("/edit", userAuth, editProfile);
profileRouter.put("/password", userAuth, changePassword);

export default profileRouter;
