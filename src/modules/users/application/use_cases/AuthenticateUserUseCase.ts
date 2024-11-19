import { inject, injectable } from 'inversify';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { TYPES } from '../../../../config/types';
import { PasswordService } from '../../domain/services/PasswordService';
import jwt from 'jsonwebtoken';

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject(TYPES.UserRepository) private userRepository: UserRepository,
    ) {}

    public async execute(
        email: string,
        password: string,
    ): Promise<{ token: string }> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Credenciales inválidas');
        }

        const isMatch = await PasswordService.comparePasswords(
            password,
            user.password,
        );

        if (!isMatch) {
            throw new Error('Credenciales inválidas');
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'secretkey',
            { expiresIn: '1h' },
        );

        return { token };
    }
}
