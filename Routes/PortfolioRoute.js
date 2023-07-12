import express from "express"
import multer from "multer"
import Portfolio from "../Models/PortfolioModel.js"

const storage = multer.diskStorage({

    destination: function (req, img, cb) {
        return cb(null, "./uploads/")
    },

    filename: function (req, img, cb) {
        return cb(null, `${img.originalname}`)
    }

})

const upload = multer({ storage })

const PortfolioRoute = express.Router()

PortfolioRoute.post("/createportfolio", upload.single("img"), async (req, res) => {

    try {

        const { filename } = req.file
        const fileUrl = `http://localhost:5000/uploads/${filename}`

        const portfolio = new Portfolio({
            ...req.body,
            img: fileUrl
        })

        await portfolio.save()
        res.status(200).json({ message: 'Data saved successfully' });
    } catch {
        console.error(error);
        res.status(500).json({ message: 'Error saving data' });
    }

})

PortfolioRoute.put("/updateportfolio/:id", upload.single("img"), async (req, res) => {

    const portfolio = await Portfolio.findByIdAndUpdate({ _id: req.params.id })

    if (portfolio && req.file) {
        const { filename } = req.file
        const fileUrl = `http://localhost:5000/uploads/${filename}`

        portfolio.name = req.body.name || portfolio.name
        portfolio.category = req.body.category || portfolio.category
        portfolio.live = req.body.live || portfolio.live
        portfolio.des = req.body.des || portfolio.des
        portfolio.fontCode = req.body.fontCode || portfolio.fontCode
        portfolio.backCode = req.body.backCode || portfolio.backCode
        portfolio.img = fileUrl || portfolio.img
    }

    if (portfolio) {

        portfolio.name = req.body.name || portfolio.name
        portfolio.category = req.body.category || portfolio.category
        portfolio.live = req.body.live || portfolio.live
        portfolio.des = req.body.des || portfolio.des
        portfolio.fontCode = req.body.fontCode || portfolio.fontCode
        portfolio.backCode = req.body.backCode || portfolio.backCode
        portfolio.img = req.file || portfolio.img
    }

    const updatePortfolio = await portfolio.save()

    res.status(200).json({ message: 'Data update successfully', portfolio : updatePortfolio});

})

export default PortfolioRoute