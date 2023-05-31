import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
    {
        name: {type : String, require: true,},
        email:  {type : String, require: true,},
        sms:  {type : String, require: true,},
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.model("Contact", ContactSchema)

export default Contact