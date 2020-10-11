import { Schema, model } from "mongoose";

const actorSchema: Schema = new Schema({
    name: {
        required: true,
        type: String
    }
})

const actorModel = model('Actor', actorSchema)

export default actorModel