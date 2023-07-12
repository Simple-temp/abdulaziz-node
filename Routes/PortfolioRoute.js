import express from "express"
import multer from "multer"
import Portfolio from "../Models/PortfolioModel.js"

const storage = multer.diskStorage({

    destination : function (req, img, cb) {
        return cb( null, "./uploads/" )
    },

    filename : function (req, img, cb) {
        return cb( null, `${img.originalname}` )
    }

})

const upload = multer ({ storage })

const PortfolioRoute = express.Router()

PortfolioRoute.post("/createportfolio", upload.single("img"),async (req, res)=>{

    console.log(req.file, req.body)

    try{

        const { filename } = req.file
        const fileUrl = `http://localhost:5000/uploads/${filename}`

        const portfolio = new Portfolio({
            ...req.body,
            img : fileUrl
        })

        await portfolio.save()
        res.status(200).json({ message: 'Data saved successfully' });
    }catch{
        console.error(error);
        res.status(500).json({ message: 'Error saving data' });
    }

})

export default PortfolioRoute