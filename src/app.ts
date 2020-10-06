import * as express from 'express'
import { Response, Request, NextFunction } from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import connectionDatabase from './configs/database'

const port: Number = parseInt(process.env.PORT) || 5000

const app = express()
dotenv.config()
app.use(bodyParser.json())

connectionDatabase()

app.get('/', (req: Request, res: Response) => {
    console.log(process.env.test)
    res.send("test")
})

app.listen(port, () => {
    console.log('server is running')
})