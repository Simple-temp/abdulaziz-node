import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
    {
        name: {type : String, require: true, unique: true},
        img:  {type : String, require: true,},
        des:  {type : String, require: true,},
        details:  {type : String, require: true,},
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model("Blog", BlogSchema)

export default Blog