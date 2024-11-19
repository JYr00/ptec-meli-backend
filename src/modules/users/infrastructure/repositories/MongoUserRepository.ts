import { UserModel } from '../models/UserModel';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { injectable } from 'inversify';

@injectable()
export class MongoUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const userDoc = await UserModel.findOne({ email });
        if (!userDoc) return null;

        return new User(
            userDoc._id.toString(),
            userDoc.name,
            userDoc.email,
            userDoc.password,
        );
    }

    async save(user: User): Promise<void> {
        const userDoc = new UserModel({
            name: user.name,
            email: user.email,
            password: user.password, // Mongo generará automáticamente el _id
        });
        await userDoc.save();
    }
}
