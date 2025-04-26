export const customerType = `#graphql
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

    loans: [Loan!]
  }

  input CustomerInput {
    name: String!
    email: String!
    phone: String
    address: String
    age: Int
    occupation: String
    membership: String
    last_order_date: String
  }

  input CustomerUpdateInput {
    name: String
    email: String
    phone: String
    address: String
    age: Int
    occupation: String
    membership: String
    last_order_date: String
  }

  extend type Query {
    customers: [Customer]
    customer(id: ID!): Customer!
  }

  extend type Mutation {
    createCustomer(customer: CustomerInput!): Customer
    updateCustomer(id: ID!, customer: CustomerUpdateInput!): Customer
    deleteCustomer(id: ID!): Boolean
  }
`;
