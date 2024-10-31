"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SubscribeController_1 = require("../controller/SubscribeController");
const subscribeRouter = express_1.default.Router();
subscribeRouter.post("/createsubscription", SubscribeController_1.subscription);
subscribeRouter.get("/getallsubscribers", SubscribeController_1.getAllSubscribers);
exports.default = subscribeRouter;
