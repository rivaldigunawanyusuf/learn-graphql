// import libraries and dependencies
import { gql } from 'graphql-tag';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// import types
import { productType } from './typeDefs/productType.js';
import { customerType } from './typeDefs/customerType.js';
import { loanType } from './typeDefs/loanType.js';

// import resolvers
import { productResolver } from './resolvers/productResolver.js';
import { customerResolver } from './resolvers/customerResolver.js';
import { loanResolver } from './resolvers/loanResolver.js';

export const typeDefs = gql`
  ${productType}
  ${customerType}
  ${loanType}

  type Query
`;

export const resolvers = {
  Query: {
    ...productResolver.Query,
    ...customerResolver.Query,
    ...loanResolver.Query,
  },
  Product: {
    ...productResolver.Product,
  },
  Customer: {
    ...customerResolver.Customer,
  },
  Loan: {
    ...loanResolver.Loan,
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