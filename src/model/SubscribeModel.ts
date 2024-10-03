import mongoose, { Schema } from "mongoose";


export interface iSubscribe extends Document {
    email: string;
}

const subscribeSchema : Schema = new Schema({
    email: {
        type: String,
        required: true,
    }
})

const subscribeModel = mongoose.model<iSubscribe>("as-subscribe", subscribeSchema)

export default subscribeModel;
