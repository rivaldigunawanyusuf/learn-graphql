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

  extend type Query {
    customers: [Customer]
    customer(id: ID!): Customer!
  }
`;
