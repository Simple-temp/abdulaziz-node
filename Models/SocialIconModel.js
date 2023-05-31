import mongoose from "mongoose";

const SocialSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        iconLink: { type: String, require: true },
    },
    {
        timestamps: true
    }
)

const Social = mongoose.model("Social", SocialSchema)

export default Social