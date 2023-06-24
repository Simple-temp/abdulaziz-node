import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Query {
    about : [AboutMe]
    SocailIcon : [SocailIcon]
    socailIconById (_id : ID! ) : SocailIcon
    blog : [Blog]
    blogById (_id : ID!) : Blog
    contact : [Contact]
    contactById (_id : ID!) : Contact
    portfolio : [Portfolio]
    portfolioById (_id : ID!) : Portfolio
    services : [Services]
    servicesById (_id : ID!) : Services
    users : [Users]
    usersById (_id : ID!) : Users
  }

  type AboutMe {
    _id : ID!
    name: String!
    file: String!
    des1: String!
    des2: String!
    title: String!
  }

  type SocailIcon {
    _id : ID!
    name: String!
    iconLink: String!
  }

  input createIcon {
    name: String!
    iconLink: String!
  }

  type Blog {
    _id : ID!
    name: String!
    img: String!
    des: String!
    details: String!
  }

  type Contact {
    _id : ID!
    name: String!
    email: String!
    sms: String!
  }

  type Portfolio {
    _id : ID!
    name: String!
    category: String!
    des: String!
    img: String!
    live: String!
    fontCode: String!
    backCode: String!
  }

  type Services {
    _id : ID!
    name: String!
    category: String!
    stock: String!
    des: String!
    qty: String!
    rating: String!
    price: String!
    img: String!
  }

  type Users {
    _id : ID!
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
  }


  type Mutation {

    create_icon ( CreateIcon : createIcon! ) : SocailIcon!
    create_about( input: AboutInput ): AboutMe
    deleteSocialIcon( _id : ID! ) : SocailIcon

  }

  scalar Upload

  input AboutInput {
    _id: ID
    name: String
    file: Upload
    des1: String
    des2: String
    title: String
  }

`;

export default typeDefs