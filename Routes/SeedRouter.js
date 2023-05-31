import express from "express";
// fake or damy data 
import { user, about, socialIcons, services, portfolio, blogs, contact } from "../Fakedata/Fakedata.js";
// models
import Users from "../Models/UserModel.js";
import AboutMe from "../Models/AboutModel.js";
import Social from "../Models/SocialIconMOdel.js";
import Services from "../Models/ServicesModel.js";
import Portfolio from "../Models/PortfolioModel.js";
import Blog from "../Models/BlogModel.js";
import Contact from "../Models/ContactModel.js";

const seedRouter = express.Router()

seedRouter.get("/",async (req, res)=>{
    await Users.deleteMany({})
    const upLoadUser = await Users.insertMany(user)
    await AboutMe.deleteMany({})
    const upLoadAbout = await AboutMe.insertMany(about)
    await Social.deleteMany({})
    const upLoadSocailIcon = await Social.insertMany(socialIcons)
    await Services.deleteMany({})
    const upLoadServices = await Services.insertMany(services)
    await Portfolio.deleteMany({})
    const upLoadPortfolio =  await Portfolio.insertMany(portfolio)
    await Blog.deleteMany({})
    const upLoadBlog = await Blog.insertMany(blogs)
    await Contact.deleteMany({})
    const upLoadContact = await Contact.insertMany(contact)
    res.send({upLoadUser, upLoadAbout, upLoadSocailIcon, upLoadServices, upLoadPortfolio, upLoadBlog, upLoadContact})
})

export default seedRouter;