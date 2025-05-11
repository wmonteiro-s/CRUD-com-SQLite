import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createProduct = async (req, res)  => {
    const { name, description, price, stock } = req.body

    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price,
                stock
            }
        })
        
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar todos os usuários",
            erro: error.message
        })
    }

}

export const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            mensagem: 'Erro ao buscar todos os produtos',
            erro: error.message
        })
    }
}

export const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        })

        return !product ? res.status(404).json({
            mensagem: `O Produto com ID ${id} não foi encontrado`
        })  :

        res.status(200).json(product)

    } catch (error) {
        res.status(400).json({
            mensagem: `Erro ao buscar o produto com o ID ${id}`,
            erro: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const { name, description, price, stock } = req.body

        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: {
                name,
                description,
                price,
                stock
            }
        })

        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao atualizar o produto",
            erro: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await prisma.product.delete({
            where: { id: Number(id) }
        })

        res.status(204).send()
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao deletar o produto",
            erro: error.message
        })
    }
}