import express from 'express';
import { AddCardController } from './addcard.controller';

const router=express.Router();


router.post(
    '/create',
    AddCardController.addCardCreate
)

router.get(
    '/:id',
    AddCardController.getAllAddCard
)

router.patch(
    '/',
    AddCardController.updathAddCard
)

export const AddCardRouter = router;