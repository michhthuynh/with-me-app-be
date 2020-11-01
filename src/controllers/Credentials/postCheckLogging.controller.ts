import { Request, Response } from "express";

const postCheckLogging = (req: Request, res: Response) => {
    res.status(200).json({
        message: "logged"
    })
}

export default postCheckLogging