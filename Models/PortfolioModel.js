import mongoose from "mongoose";

const PortfolioSchema = mongoose.Schema(
    {
        name: {type : String, require: true, unique: true},
        category: {type : String, require: true,},
        des:  {type : String, require: true,},
        img:  {type : String, require: true,},
        live:  {type : String, require: true,},
        fontCode:  {type : String, require: true,},
        backCode:  {type : String, require: true,},
    },
    {
        timestamps: true
    }
)

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

export default Portfolio