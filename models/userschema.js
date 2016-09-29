import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema,
    UserSchema = new Schema({
        username: String,
        password: String
    });

UserSchema.plugin(passportLocalMongoose);
export default mongoose.model('UserSchema', UserSchema);