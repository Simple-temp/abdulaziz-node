import express from "express";
import multer from "multer";
import Services from "../Models/ServicesModel.js";

const storage = multer.diskStorage({

    destination : function (req, img, cb) {
        return cb( null, "./uploads/" )
    },

    filename : function (req, img, cb) {
        return cb( null, `${img.originalname}` )
    }

})

const upload = multer ({ storage })

const ServicesRoute = express.Router()

ServicesRoute.post("/createservices",upload.single("img"), async (req, res)=>{
        
    try {
        const { filename } = req.file;

        const fileUrl = `http://localhost:5000/uploads/${filename}`

        const services = new Services({ 
            name : req.body.name,
            category: req.body.category,
            stock: req.body.stock,
            des: req.body.des,
            qty: req.body.qty,
            rating: req.body.rating,
            price: req.body.price, 
            img: fileUrl 
        });
        
        await services.save();

        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving data' });
    }

})

ServicesRoute.put("/updateservices/:id",upload.single("img"), async (req, res)=>{

    const services = await Services.findById({ _id : req.params.id})
    const { filename } = req.file;
    const fileUrl = `http://localhost:5000/uploads/${filename}`
    
    if(services){

        services.name = req.body.name || services.name
        services.category = req.body.category || services.category
        services.stock = req.body.stock || services.stock
        services.des = req.body.des || services.des
        services.qty = req.body.qty || services.qty
        services.rating = req.body.rating || services.rating
        services.price = req.body.price || services.price
        services.img = fileUrl || services.img
    }
        
    const updateService = await services.save();

    res.status(200).json({ message: 'Data updated successfully', services : updateService });
})

export default ServicesRoute