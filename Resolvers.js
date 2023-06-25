import AboutMe from "./Models/AboutModel.js";
import Social from "./Models/SocialIconMOdel.js";
import Blog from "./Models/BlogModel.js";
import Contact from "./Models/ContactModel.js";
import Portfolio from "./Models/PortfolioModel.js";
import Services from "./Models/ServicesModel.js";
import Users from "./Models/UserModel.js";
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const resolvers = {
    Query: {
        about: async () => await AboutMe.find({}),
        SocailIcon: async () => await Social.find({}),
        socailIconById: async (_, { _id }) => await Social.findById({ _id }),
        blog: async () => await Blog.find({}),
        blogById: async (_, { _id }) => await Blog.findById({ _id }),
        contact: async () => await Contact.find({}),
        contactById: async (_, { _id }) => await Contact.findById({ _id }),
        portfolio: async () => await Portfolio.find({}),
        portfolioById: async (_, { _id }) => await Portfolio.findById({ _id }),
        services: async () => await Services.find({}),
        servicesById: async (_, { _id }) => await Services.findById({ _id }),
        users: async () => await Users.find({}),
        usersById: async (_, { _id }) => await Users.findById({ _id }),
    },

    Upload: GraphQLUpload,

    Mutation: {

        create_icon: async (_, { CreateIcon }) => {

            const newIcon = new Social({
                ...CreateIcon
            })

            return await newIcon.save()
        },

        create_about: async (_, { input }) => {

            if (input.file === null) {
                const about = await AboutMe.findById({ _id: input._id })

                if (about) {

                    about.name = input.name || about.name
                    about.file = input.file || about.file
                    about.des1 = input.des1 || about.des1
                    about.des2 = input.des2 || about.des2
                    about.title = input.title || about.title

                }

                return await about.save()
            }

            if (input.file !== null) {

                const { createReadStream, filename } = await input.file;

                const stream = createReadStream();
                const path = join('uploads', `${Date.now()}-${filename}`);
                const NewPath = `${Date.now()}-${filename}`

                const uploadPromise = new Promise((resolve, reject) => {
                    const writeStream = createWriteStream(path);
                    stream.on('error', (error) => reject(error));
                    writeStream.on('finish', () => resolve());
                    writeStream.on('error', (error) => reject(error));
                    stream.pipe(writeStream);
                });

                await uploadPromise;

                const fileUrl = `http://localhost:5000/uploads/${NewPath}`;

                const about = await AboutMe.findById({ _id: input._id })

                if (about) {

                    about.name = input.name || about.name
                    about.file = fileUrl || about.file
                    about.des1 = input.des1 || about.des1
                    about.des2 = input.des2 || about.des2
                    about.title = input.title || about.title

                }

                return await about.save()

            }
        },

        deleteSocialIcon: async (_, { _id }) => {

            const social = await Social.findById({ _id })
            return await social.deleteOne()

        },

        // =============================================================================start BLOG 

        create_blog: async (_, { input }) => {

            const { createReadStream, filename } = await input.img;

            const stream = createReadStream();
            const path = join('uploads', `${filename}`);
            const NewPath = `${filename}`

            const uploadPromise = new Promise((resolve, reject) => {
                const writeStream = createWriteStream(path);
                stream.on('error', (error) => reject(error));
                writeStream.on('finish', () => resolve());
                writeStream.on('error', (error) => reject(error));
                stream.pipe(writeStream);
            });

            await uploadPromise;

            const fileUrl = `http://localhost:5000/uploads/${NewPath}`;

            const newBlog = new Blog({
                ...input,
                img: fileUrl
            })

            return await newBlog.save()

        },

        update_blog: async (_, { input }) => {

            if (input.img === null) {

                const blog = await Blog.findById({ _id: input._id })

                if (blog) {

                    blog.name = input.name || blog.name
                    blog.img = input.img || blog.img
                    blog.des = input.des || blog.des
                    blog.details = input.details || blog.details

                }

                return await blog.save()
            }

            if (input.img !== null) {
                const { createReadStream, filename } = await input.img;

                const stream = createReadStream();
                const path = join('uploads', `${filename}`);
                const NewPath = `${filename}`

                const uploadPromise = new Promise((resolve, reject) => {
                    const writeStream = createWriteStream(path);
                    stream.on('error', (error) => reject(error));
                    writeStream.on('finish', () => resolve());
                    writeStream.on('error', (error) => reject(error));
                    stream.pipe(writeStream);
                });

                await uploadPromise;

                const fileUrl = `http://localhost:5000/uploads/${NewPath}`;

                const blog = await Blog.findById({ _id: input._id })

                if (blog) {

                    blog.name = input.name || blog.name
                    blog.img = fileUrl || blog.img
                    blog.des = input.des || blog.des
                    blog.details = input.details || blog.details

                }

                return await blog.save()
            }

        },

        delete_blog: async (_, { _id }) => {

            const blog = await Blog.findById({ _id })
            return await blog.deleteOne()

        }

    },
};

export default resolvers