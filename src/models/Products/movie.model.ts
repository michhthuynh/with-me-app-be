import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'


const movieSchema: Schema = new Schema({
    name: {
        required: true,
        type: String
    },
    region: {
        required: true,
        type: String
    },
    actor: {
        required: true,
        type: Array,
    },
    categories: {
        required: true,
        type: Array
    },
    description: {
        required: true,
        type: String
    },
    release_date: {
        required: true,
        type: String
    },
    upload_date: {
        required: true,
        type: String
    },
    premium: {
        required: true,
        type: Boolean
    }
})

const movieModel = mongoose.model('Movie', movieSchema)

export default movieModel