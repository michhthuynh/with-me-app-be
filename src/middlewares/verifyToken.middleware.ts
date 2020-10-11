import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    verify(res.locals.token, process.env.SECRET_STRING, (err: Error) => {
        if (err) throw err
        if (err) {
            res.status(403).json({
                message: '403 Forbidden'
            })
            return
        }
        next()
    })
}

export default verifyToken