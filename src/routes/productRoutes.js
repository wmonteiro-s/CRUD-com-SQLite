import express from 'express'
import { createProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productControllers.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)

export default router