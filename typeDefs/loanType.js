export const loanType = `#graphql
  type Loan {
    id: ID!
    product_id: ID!
    customer_id: ID!
    borrowed_at: String!
    returned_at: String!

    product: [Product!]
    customer: [Customer!]
  }

  extend type Query {
    loans: [Loan]
    loan(id: ID!): Loan!
  }
`;
