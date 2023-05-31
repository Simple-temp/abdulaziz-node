import mongoose from "mongoose";

const ServicesSchema = mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        category: { type: String, require: true, },
        stock: { type: Number, require: true, },
        des: { type: String, require: true, },
        qty: { type: Number, require: true, },
        rating: { type: Number, require: true, },
        price: { type: Number, require: true, },
        img: { type: String, require: true, },
    },
    {
        timestamps: true
    }
)

const Services = mongoose.model("Services", ServicesSchema)

export default Services