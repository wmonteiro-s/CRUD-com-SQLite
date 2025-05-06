import express from 'express'
import { getAllUsers, createUser, deleteUser, updateUser } from '../controllers/userControllers.js'
import { createUserSchema, updateUserSchema } from '../schemas/userSchema.js'
import { validate } from '../middlewares/validate.js'

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", validate(createUserSchema), createUser)
router.delete("/:id", deleteUser)
router.put("/:id", validate(updateUserSchema), updateUser)


export default router