import mongoose from "mongoose";

const userModelSchema =  new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
 
const userModel = mongoose.models.user || mongoose.model("user", userModelSchema);
export default userModel;