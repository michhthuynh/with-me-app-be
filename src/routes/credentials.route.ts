import * as express from 'express'
import postCheckLogging from '../controllers/Credentials/postCheckLogging.controller'
import postLogin from '../controllers/Credentials/postLogin.controller'
import postSignUp from '../controllers/Credentials/postSignUp.controller'
import getToken from '../middlewares/getToken.middleware'
import verifyLogin from '../middlewares/verifyLogin.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'

const routerCredentials = express.Router()

routerCredentials.post('/signup', postSignUp)
routerCredentials.post('/login', verifyLogin, postLogin)
routerCredentials.get('/check-logged', getToken, verifyToken, postCheckLogging)

export default routerCredentials