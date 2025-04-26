export const productType = `#graphql
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

    loans: [Loan!]
  }

  extend type Query {
    products: [Product]
    product(id: ID!): Product!
  }
`;
