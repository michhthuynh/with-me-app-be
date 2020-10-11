import * as express from 'express'
import getToken from '../middlewares/getToken.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'
import movieRouter from './movies/movie.route'

const routerProduct = express.Router()

routerProduct.use('/movies', getToken, verifyToken, movieRouter)

export default routerProduct