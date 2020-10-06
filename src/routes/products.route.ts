import * as express from 'express'

const routerProduct = express.Router()

routerProduct.get('/test', (req, res) => {
    res.send('hfasdffasdfds')
})

export default routerProduct