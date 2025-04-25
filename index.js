import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { products } from "./_products.js";
import { customers } from "./_customers.js";

const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    category: String
    stock: Int
    rating: Float
    reviews: Int
    manufacturer: String
    created_at: String!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    phone: String
    address: String
    age: Int
    occupation: String
    membership: String
    created_at: String!
    last_order_date: String
  }

  # Query is a special object in GraphQL, it's the main entry point for all queries
  type Query {
    products: [Product]
    customers: [Customer]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    customers: () => customers,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);