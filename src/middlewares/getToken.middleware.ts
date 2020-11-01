import { NextFunction, Request, Response } from 'express'

const getToken = async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader: string = req.headers['authorization']
    //Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer: Array<string> = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1]
        if (bearerToken.trim() == "null" || bearerToken.trim() == "undefined") {
            res.sendStatus(400)
            return
        }
        // Set the token
        res.locals.token = bearerToken
        next();

    } else {
        // Forbidden
        res.sendStatus(403)
        return
    }
}

export default getToken