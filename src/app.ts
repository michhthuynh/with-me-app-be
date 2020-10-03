import * as express from 'express'
import { Response, Request, NextFunction } from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    console.log(process.env.test)
    res.send("test")
})

app.listen(3000, () => {
    console.log('server is running')
})