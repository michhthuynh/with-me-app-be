import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const postLogin = (req: Request, res: Response) => {
    const { username, password } = req.body

    sign({ username }, process.env.SECRET_STRING, (err, token) => {
        res.json({
            token
        })
    })
}

export default postLogin