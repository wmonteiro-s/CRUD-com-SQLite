import express from 'express'
import { createProduct, getAllProducts, getProduct } from '../controllers/productControllers.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)

export default router