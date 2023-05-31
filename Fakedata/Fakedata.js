// =========================================================== users 

import bcrypt from "bcryptjs"

export const user = [
    {
        name : "Aziz",
        email : "reingsroman042@gmail.com",
        password : bcrypt.hashSync("123456"),
        isAdmin : true
    },
    {
        name : "Jibon",
        email : "Jibon33@gmail.com",
        password : bcrypt.hashSync("123456"),
        isAdmin : false
    },
]


// =========================================================== about 

export const about = {
    name: "Abdul Aziz",
    img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1652429562/samples/people/boy-snow-hoodie.jpg",
    des1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.",
    des2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni a totam alias, deserunt repellendus. Quaerat, beatae provident! Repellendus, sed.",
    title: "I am a website developer",
}

export const socialIcons = [
    {
        name: "fa-brands fa-facebook-f",
        iconLink: "facebook.com"
    },
    {
        name: "fa-brands fa-twitter",
        iconLink: "twitter.com"
    },
    {
        name: "fa-brands fa-instagram",
        iconLink: "instagram.com"
    },
]

// =========================================================== services 

export const services = [
    {
        id: 1,
        name: "Javascript1",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 2.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg"
    },
    {
        id: 2,
        name: "Javascript2",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.5,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png"
    },
    {
        id: 3,
        name: "Javascript3",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 2.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629391/xwhmcoqovgtobzyep0zq.png"
    },
    {
        id: 4,
        name: "Javascript4",
        category: "programming",
        stock: "2",
        des: "here is your description",
        qty: 1,
        rating: 4.3,
        price: 30,
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629213/j9f3jrtgm6lp2pjzdmf1.png"
    },
]

// =========================================================== portfolio 

export const portfolio = [
    {
        id: 1,
        name: "Javascript1",
        category: "mern",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 2,
        name: "Javascript2",
        category: "crud",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 3,
        name: "Javascript3",
        category: "crud",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 4,
        name: "Javascript4",
        category: "chat",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 5,
        name: "Javascript5",
        category: "app",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 6,
        name: "Javascript6",
        category: "mern",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 7,
        name: "Javascript7",
        category: "chat",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },
    {
        id: 8,
        name: "Javascript8",
        category: "app",
        des: "here is your description",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629606/m6c3q28owfvplawnaoqv.jpg",
        live : "@example.com",
        fontCode : "frontcode.com",
        backCode : "backcode.com"
    },

]

// =========================================================== blog 

export const blogs = [
    {
        id : 1,
        name: "HTML5",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a dolores nemo sit ipsam incidunt! Amet porro magnam rem veritatis repellendus officiis.",
        details: "youtube.com"
    },
    {
        id : 2,
        name: "CSS3",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a dolores nemo sit ipsam incidunt! Amet porro magnam rem veritatis repellendus officiis.",
        details: "youtube.com"
    },
    {
        id : 3,
        name: "JS",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a dolores nemo sit ipsam incidunt! Amet porro magnam rem veritatis repellendus officiis.",
        details: "youtube.com"
    },
    {
        id : 4,
        name: "REACT",
        img: "https://res.cloudinary.com/image-hosting-api/image/upload/v1655629526/gpgoaf2uvzsxejjgckyn.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a dolores nemo sit ipsam incidunt! Amet porro magnam rem veritatis repellendus officiis.",
        details: "youtube.com"
    },
]


// =========================================================== contact

export const contact = [
    {
        name : "A one",
        email : "email11@.com",
        sms : "this is a sms"
    },
    {
        name : "A one",
        email : "email11@.com",
        sms : "this is a sms"
    },
]