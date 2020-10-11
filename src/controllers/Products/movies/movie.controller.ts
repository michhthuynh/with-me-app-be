import { Request, Response } from "express";

const getMovie = (req: Request, res: Response) => {
    const { id } = req.params
    res.json({
        message: id
    })
    return
}

export default getMovie