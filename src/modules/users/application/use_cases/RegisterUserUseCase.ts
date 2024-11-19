import { inject, injectable } from 'inversify';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { TYPES } from '../../../../config/types';
import { User } from '../../domain/entities/User';
import { PasswordService } from '../../domain/services/PasswordService';

@injectable()
export class RegisterUserUseCase {
    constructor(
        @inject(TYPES.UserRepository) private userRepository: UserRepository,
    ) {}

    public async execute(
        name: string,
        email: string,
        password: string,
    ): Promise<void> {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('El email ya está registrado');
        }

        const hashedPassword = await PasswordService.hashPassword(password);
        const user = new User('', name, email, hashedPassword);

        await this.userRepository.save(user);
    }
}
