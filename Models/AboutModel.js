import mongoose from "mongoose";

const AboutSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        img: { type: String, require: true },
        des1: { type: String, require: true },
        des2: { type: String, require: true },
        title: { type: String, require: true },
    },
    {
        timestamps: true
    }
)

const AboutMe = mongoose.model("Aboutme", AboutSchema)

export default AboutMe