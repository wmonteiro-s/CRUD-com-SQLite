import express from 'express'
import { getAllUsers, createUser, deleteUser, updateUser } from '../controllers/userControllers.js'

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

export default router