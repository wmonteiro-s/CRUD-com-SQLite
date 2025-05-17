import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productControllers.js'
import { validate } from '../middlewares/validate.js'
import { createProductSchema, updateProductSchema } from '../schemas/productSchema.js'

const router = express.Router()

router.post('/', validate(createProductSchema), createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.put('/:id', validate(updateProductSchema), updateProduct)
router.delete('/:id', deleteProduct)

export default router