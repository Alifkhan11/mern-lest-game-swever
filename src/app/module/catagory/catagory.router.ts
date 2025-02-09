import e from "express";
import { CatagoryController } from "./catagory.controller";

const router=e.Router();

router.post(
    '/create',
    CatagoryController.createCatagory
)

router.get(
    '/',
    CatagoryController.getAllCatagory
)
router.get(
    '/:id',
    CatagoryController.getSingleCatagory
)

router.patch(
    '/:id',
    CatagoryController.updathCatagory
)
router.delete(
    '/:id',
    CatagoryController.deletedCatagory
)

export const CatagoryRouter=router;