import AboutMe from "./Models/AboutModel.js";
import Social from "./Models/SocialIconMOdel.js";
import Blog from "./Models/BlogModel.js";
import Contact from "./Models/ContactModel.js";
import Portfolio from "./Models/PortfolioModel.js";
import Services from "./Models/ServicesModel.js";
import Users from "./Models/UserModel.js";

const resolvers = {
    Query: {
        about : async () => await AboutMe.find({}),
        SocailIcon : async () => await Social.find({}),
        socailIconById : async (_,{_id}) => await Social.findById({_id}),
        blog : async () => await Blog.find({}),
        blogById : async (_,{_id}) => await Blog.findById({_id}),
        contact : async () => await Contact.find({}),
        contactById : async (_,{_id}) => await Contact.findById({_id}),
        portfolio : async () => await Portfolio.find({}),
        portfolioById : async (_,{_id}) => await Portfolio.findById({_id}),
        services : async () => await Services.find({}),
        servicesById : async (_,{_id}) => await Services.findById({_id}),
        users : async () => await Users.find({}),
        usersById : async (_,{_id}) => await Users.findById({_id}),
    },
};

export default resolvers