import * as express from 'express'
import getMovie from '../../controllers/Products/movies/movie.controller'

const routerRouter = express.Router()

routerRouter.get('/movie/:id', getMovie)

export default routerRouter