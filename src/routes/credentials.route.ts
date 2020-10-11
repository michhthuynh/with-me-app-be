import * as express from 'express'
import postLogin from '../controllers/Credentials/postLogin.controller'
import postSignUp from '../controllers/Credentials/postSignUp.controller'
import verifyLogin from '../middlewares/verifyLogin.middleware'

const routerCredentials = express.Router()

routerCredentials.post('/signup', postSignUp)
routerCredentials.post('/login', verifyLogin, postLogin)

export default routerCredentials