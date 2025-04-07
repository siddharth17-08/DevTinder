import { Router } from "express";
import { userAuth } from "../middlewares/auth.js";
import { sendConnectionRequest, reviewConnectionRequest } from "../controllers/request.js";

const requestRouter = Router();
requestRouter.post("/send/:status/:userId", userAuth, sendConnectionRequest);
requestRouter.post("/review/:status/:requestId", userAuth, reviewConnectionRequest);

export default requestRouter;
