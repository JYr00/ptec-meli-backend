import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { RegisterUserUseCase } from '../../application/use_cases/RegisterUserUseCase';
import { TYPES } from '../../../../config/types';
import { validationResult } from 'express-validator';
import { AuthenticateUserUseCase } from '../../application/use_cases/AuthenticateUserUseCase';

@injectable()
export class AuthController {
    constructor(
        @inject(TYPES.RegisterUserUseCase)
        private readonly registerUserUseCase: RegisterUserUseCase,
        @inject(TYPES.AuthenticateUserUseCase)
        private readonly authenticateUserUseCase: AuthenticateUserUseCase,
    ) {}

    public register = async (req: Request, res: Response): Promise<void> => {
        // Validar datos
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return; // Asegúrate de detener el flujo
        }

        const { name, email, password } = req.body;

        try {
            await this.registerUserUseCase.execute(name, email, password);
            res.status(201).json({
                message: 'Usuario registrado exitosamente',
            });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        // Validar datos
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return; // Detener el flujo si hay errores
        }

        const { email, password } = req.body;

        try {
            const { token } = await this.authenticateUserUseCase.execute(
                email,
                password,
            );
            res.status(200).json({ token });
        } catch (error: any) {
            res.status(401).json({ message: error.message }); // 401 para credenciales inválidas
        }
    };
}
