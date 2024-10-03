import express from "express";
import { sendContactMessage } from "../controller/ContactController";


const contactUsRouter = express.Router();

contactUsRouter.post("/createmail", sendContactMessage);

export default contactUsRouter;