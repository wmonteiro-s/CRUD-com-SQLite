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

