import express from "express";
import { getAllSubscribers, subscription } from "../controller/SubscribeController";


const subscribeRouter = express.Router();


subscribeRouter.post("/createsubscription", subscription);
subscribeRouter.get("/getallsubscribers", getAllSubscribers)

export default subscribeRouter;