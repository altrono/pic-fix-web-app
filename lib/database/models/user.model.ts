import { Schema, model, models } from "mongoose";

export interface User extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstname: string;
    lastName: string;
    planId: number;
    creditBalance: number;
}

const UserSchema = new Schema({
    clerkId: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    username: {type: String, require: true, unique: true},
    photo: {type: String, require: true},
    firstName: {type: String},
    lastName: {type: String},
    planeId: {type: Number, default: 1,},
    creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model('User', UserSchema);

export default User;