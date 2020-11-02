import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const postLogin = (req: Request, res: Response) => {
    const { username, password } = req.body

    sign({ username }, process.env.SECRET_STRING, { expiresIn: '24h' }, (err, token) => {
        if(err) {
            console.log(err.message)
            res.sendStatus(503)
            return
        }
        res.json({
            token
        })
        return
    })
}

export default postLogin