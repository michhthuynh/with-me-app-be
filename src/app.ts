import * as express from 'express'
import { Response, Request, NextFunction } from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import connectDatabase from './configs/db.config'
import router from './routes/router'

const port = process.env.PORT || 3000
const app = express()
dotenv.config()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Server is running..."
    })
})

app.get('*', (req: Request, res: Response) => {
    res.json({
        message: "Server is running..."
    })
})
connectDatabase()

app.listen(port, () => {
    console.log('server is running')
})

