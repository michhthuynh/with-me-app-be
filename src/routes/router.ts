import * as express from 'express'
import routerProduct from './products.route'

const router = express.Router()

router.use('/products/', routerProduct)


export default router