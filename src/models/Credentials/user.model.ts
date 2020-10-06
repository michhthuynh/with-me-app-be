import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema: Schema = new Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

export default mongoose.model('User', userSchema)