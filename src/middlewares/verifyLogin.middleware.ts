import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import validator from "validator";
import userModel from "../models/Credentials/user.model";

const verifyLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    if (!validator.isLength(username, { min: 10, max: 26 })) {
        res.status(400).json({
            message: "Username is invalid"
        })
        return
    }

    if (!validator.isLength(password, { min: 10, max: 26 })) {
        res.status(400).json({
            message: "Password is invalid"
        })
        return
    }

    const result = await userModel.find({ username: username });
    if (!result[0]) {
        res.status(401).json({
            message: 'User does not exist'
        });
        return;
    }

    const match = await compare(password, result[0]['password'])

    if (!match) {
        res.status(401).json({
            message: 'Wrong password.'
        })
        return;
    }
    console.log('Verify account successfully')
    next()
}

export default verifyLogin