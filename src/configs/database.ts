import * as mongoose from 'mongoose'
// import {Collection} from 'mongoose'

const connectionDatabase = () => {
    const uriDatabase = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/:${process.env.DATABASE}`   
    mongoose.connect(uriDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Successfully conenct to ' + process.env.DB_HOST)
        })
        .catch(err => {
            console.log(`Cannot connect to Database...\r ${err}`)
            process.exit()
        })
}
export default connectionDatabase