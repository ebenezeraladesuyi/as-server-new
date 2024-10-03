import { Request, Response } from "express";
import subscribeModel from "../model/SubscribeModel";



export const subscription = async (req: Request, res: Response): Promise<any> =>{
    try {
        const {email} = req.body;

        const checkExist = await subscribeModel.findOne({email})

        if (checkExist) {
            return res.status(400).json({
                message: "This email has already subscribed"
            })
        } else {
            const sub = await subscribeModel.create({email});

            return res.status(201).json({
                message: "subscription successful",
                data: sub,
            })
        }
    } catch (error : any) {
        // Log the error for debugging
        console.error("Subscription error:", error);

        return res.status(500).json({
            message: "Failed to subscribe",
            error: error.message || error,
        })
    }
}


// get all subs
export const getAllSubscribers = async (req: Request, res: Response) : Promise<any> => {
    try {
        const subscribers = await subscribeModel.find();

        return res.status(200).json({
            message: "all subscribers gotten",
            data: subscribers
        })
    } catch (error) {
        return res.status(500).json({
            message: "subscribers not gotten",
            data: error
        })
    }
}
