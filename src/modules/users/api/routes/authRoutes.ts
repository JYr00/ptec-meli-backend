import { Router } from 'express';
import { container } from '../../../../config/inversify.config';
import { TYPES } from '../../../../config/types';
import { AuthController } from '../controllers/AuthController';
import { check } from 'express-validator';

const router = Router();
const authController = container.get<AuthController>(TYPES.AuthController);

// Ruta de registro de usuario
router.post(
    '/register',
    [
        // Validaciones
        check('name').notEmpty().withMessage('El nombre es obligatorio'),
        check('email').isEmail().withMessage('Debe ser un email válido'),
        check('password')
            .isLength({ min: 6 })
            .withMessage('La contraseña debe tener al menos 6 caracteres'),
    ],
    authController.register,
);

// Ruta de inicio de sesión
router.post(
    '/login',
    [
        // Validaciones
        check('email').isEmail().withMessage('Debe ser un email válido'),
        check('password')
            .notEmpty()
            .withMessage('La contraseña es obligatoria'),
    ],
    authController.login,
);

export default router;
