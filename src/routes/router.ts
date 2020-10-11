import * as express from 'express'
import routerCredentials from './credentials.route'
import routerProduct from './products.route'

const router = express.Router()

router.use('/products/', routerProduct)
router.use('/auth/', routerCredentials)


export default router