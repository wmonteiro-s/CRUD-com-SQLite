import z from 'zod'

export const createProductSchema = z.object({
    name: z.string({
        invalid_type_error: "O nome deve ser uma string"
    })
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

    price: z.number({
        invalid_type_error: "O preço deve ser um número"
    })
    .positive("O preço deve ser maior que zero"),

    description: z.string().optional(),

    stock: z.number({
        invalid_type_error: "O estoque deve ser um número"
    })
    .int("O estoque deve ser um número inteiro")
    .nonnegative("O estoque não pode ser negativo")
})

export const updateProductSchema = z.object({
    name: z.string({
        invalid_type_error: "O nome deve ser uma string"
    })
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .optional(),

    price: z.number({
        invalid_type_error: "O preço deve ser um número"
    })
    .positive("O preço deve ser maior que zero")
    .optional(),

    description: z.string().optional(),

    stock: z.number({
        invalid_type_error: "O estoque deve ser um número"
    })
    .int("O estoque deve ser um número inteiro")
    .nonnegative("O estoque não pode ser negativo")
    .optional()
})