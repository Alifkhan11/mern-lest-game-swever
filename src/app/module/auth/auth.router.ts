import e from "express";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import validateRequest from "../../middlewere/validationRequest";

const router = e.Router();

router.post(
    '/creat',
    validateRequest(AuthValidation.userRegistrationvalidationSchema),
    AuthController.userRegistration
);

router.post(
    '/login',
    AuthController.userLogin
);

router.get(
    '/:id',
    AuthController.getSingleUser
);

router.get(
    '/',
    AuthController.getUser
);

router.delete(
    '/:id',
    AuthController.userDeleted
);

router.patch(
    '/:id',
    AuthController.updathUser
);

export const AuthRouter = router;