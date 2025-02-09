import e from "express";
import { AuthRouter } from "../module/auth/auth.router";
import { ProductsRouter } from "../module/products/products.router";
import { CatagoryRouter } from "../module/catagory/catagory.router";
import { AddCardRouter } from "../module/addCard/addcard.router";

const router = e.Router()

const allRouter=[
    {
        path:'/auth',
        route:AuthRouter
    },
    {
        path:'/products',
        route:ProductsRouter
    },
    {
        path:'/catagory',
        route:CatagoryRouter
    },
    {
        path:'/addcard',
        route:AddCardRouter
    },
]

allRouter.forEach((route)=>router.use(route.path,route.route))


export default router