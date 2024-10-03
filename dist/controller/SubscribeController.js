"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSubscribers = exports.subscription = void 0;
const SubscribeModel_1 = __importDefault(require("../model/SubscribeModel"));
const subscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const checkExist = yield SubscribeModel_1.default.findOne({ email });
        if (checkExist) {
            return res.status(400).json({
                message: "This email has already subscribed"
            });
        }
        else {
            const sub = yield SubscribeModel_1.default.create({ email });
            return res.status(201).json({
                message: "subscription successful",
                data: sub,
            });
        }
    }
    catch (error) {
        // Log the error for debugging
        console.error("Subscription error:", error);
        return res.status(500).json({
            message: "Failed to subscribe",
            error: error.message || error,
        });
    }
});
exports.subscription = subscription;
// get all subs
const getAllSubscribers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscribers = yield SubscribeModel_1.default.find();
        return res.status(200).json({
            message: "all subscribers gotten",
            data: subscribers
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "subscribers not gotten",
            data: error
        });
    }
});
exports.getAllSubscribers = getAllSubscribers;
