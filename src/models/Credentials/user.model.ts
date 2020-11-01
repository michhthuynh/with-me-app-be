import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'


const userSchema: Schema = new Schema({
    username: {
        required: true,
        type: String
    },
    full_name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    root: {
        required: true,
        type: Boolean
    },
    premium: {
        required: true,
        type: Boolean
    }
})

const userModel = mongoose.model('User', userSchema)

export default userModel