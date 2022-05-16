import {Document, model, Schema} from 'mongoose';
import validator from 'validator';

interface UserDocumentInterface extends Document {
    name: string,
    surnames: string,
    age: number,
    email: string,
    passwd: string,
}

const UserSchema = new Schema<UserDocumentInterface>({
    name: {
        type: String,
        trim: true,
        require: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
              throw new Error('Name must start with a Capital Letter');
            }
        },
    },
    surnames: {
        type: String,
        trim: true,
        require: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
              throw new Error('Surname must start with a Capital Letter');
            }
        },
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        uniq: true,
        trim: true,
        require: true,
    },
    passwd: {
        type: String,
        trim: true,
        require: true,
        validate: (value: string) => {
            if(!validator.isAlphanumeric(value)) {
                throw new Error('Password must contain alphanumeric characters only');
            }
        },
    },
});

export const User = model<UserDocumentInterface>('User', UserSchema);