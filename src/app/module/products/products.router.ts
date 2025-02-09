import e from "express";
import { ProductsController } from "./products.controller";

const router=e.Router();

router.post(
    '/create',
    ProductsController.createProducts
)

router.get(
    '/',
    ProductsController.getAllProducts
)

router.delete(
    '/delete/:id',
    ProductsController.deletedProduct
)


router.get(
    '/get/:id',
    ProductsController.getSingleProduct
)


router.patch(
    '/update/:id',
    ProductsController.updateProduct
)



export const ProductsRouter=router;