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

  input LoanInput {
    product_id: ID!
    customer_id: ID!
    borrowed_at: String!
    returned_at: String!
  }

  input LoanUpdateInput {
    product_id: ID
    customer_id: ID
    borrowed_at: String
    returned_at: String
  }

  extend type Query {
    loans: [Loan]
    loan(id: ID!): Loan!
  }

  extend type Mutation {
    createLoan(loan: LoanInput!): Loan
    updateLoan(id: ID!, loan: LoanUpdateInput!): Loan
    deleteLoan(id: ID!): Boolean
  }
`;
