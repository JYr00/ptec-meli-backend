import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);
