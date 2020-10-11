import { Schema, model } from "mongoose";

const premiumSchema: Schema = new Schema({
    username: {
        required: true,
        type: String
    },
    register_date: {
        required: true,
        type: String
    },
    expire_date: {
        required: true,
        type: String
    }
})

const premiumModel = model('Premium', premiumSchema)

export default premiumModel