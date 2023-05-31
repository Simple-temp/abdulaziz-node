import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        isAdmin: { type: String, unique: true, default: false },
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("User", UserSchema)

export default Users