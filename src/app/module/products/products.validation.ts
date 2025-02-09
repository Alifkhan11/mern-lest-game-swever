import { z } from "zod";

const ProductsCreateValidationSchema = z.object({
    body: z.object({
        productName: z.string()
            .min(3, "Product name must be at least 3 characters")
            .max(100, "Product name cannot exceed 100 characters"),

        description: z.string()
            .min(10, "Description must be at least 10 characters")
            .max(1000, "Description cannot exceed 1000 characters"),

        price: z.coerce.number()
            .positive("Price must be a positive number")
            .max(1000000, "Price cannot exceed 1,000,000"),

        stockQuantity: z.coerce.number()
            .int("Stock quantity must be an integer")
            .min(0, "Stock quantity cannot be negative"),

        category: z.enum(["electronics", "clothing", "books", "home"], {
            errorMap: () => ({ message: "Please select a valid category" })
        }),

        isDeleted:z.boolean().default(false),

        productImages: z.array(z.string().url("Invalid image URL"))
            .min(1, "At least one product image is required")

    })

})


export const ProductsValidation={
    ProductsCreateValidationSchema
}