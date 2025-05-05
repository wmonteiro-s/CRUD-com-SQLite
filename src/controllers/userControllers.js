import { PrismaClient } from "@prisma/client"
import { json } from "express"

const prisma = new PrismaClient()

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar todos os usuários",
            erro: error.message
        })
    }
}

export const createUser = async (req, res) => {
    const { name, email } = req.body

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email
            }
        })
        
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar o novo usuário",
            erro: error.message
        })
    }

}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await prisma.user.delete({
            where: { id: Number(id) }
        })
        
        res.status(204)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao deletar usuário",
            message: error.message
        })
    }

}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const { name, email } = req.body
    
        const user = await prisma.user.update({
            where: { id: Number(id)},
            data: {
                name,
                email
            }
        })
        
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao atualizar usuário",
            message: error.message
        })
    }

}