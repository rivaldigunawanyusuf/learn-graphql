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

  input ProductInput {
    name: String!
    price: Float!
    description: String
    category: String
    stock: Int
    rating: Float
    reviews: Int
    manufacturer: String
  }

  input ProductUpdateInput {
    name: String
    price: Float
    description: String
    category: String
    stock: Int
    rating: Float
    reviews: Int
    manufacturer: String
  }

  extend type Query {
    products: [Product]
    product(id: ID!): Product!
  }

  extend type Mutation {
    createProduct(product: ProductInput!): Product
    updateProduct(id: ID!, product: ProductUpdateInput!): Product
    deleteProduct(id: ID!): Boolean
  }
`;
