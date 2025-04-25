// import libraries and dependencies
import { gql } from 'graphql-tag';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// import types
import { productType } from './typeDefs/productType.js';
import { customerType } from './typeDefs/customerType.js';

// import resolvers
import { productResolver } from './resolvers/productResolver.js';
import { customerResolver } from './resolvers/customerResolver.js';

export const typeDefs = gql`
  ${productType}
  ${customerType}

  type Query
`;

export const resolvers = {
  Query: {
    ...productResolver.Query,
    ...customerResolver.Query
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);