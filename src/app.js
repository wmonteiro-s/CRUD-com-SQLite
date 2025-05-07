import express from "express"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/product', productRoutes)

export default app