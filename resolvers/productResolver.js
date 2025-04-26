import { products } from "../data/_products.js";
import { itemLoans } from "../data/_loans.js";

export const productResolver = {
  Query: {
    products: () => products,
    product: (parent, args) => {
      const product = products.find((product) => product.id == args.id);
      if (!product) throw new Error("Product not found");
      return product;
    }
  },
  Mutation: {
    createProduct: (_, { product }) => {
      const newId = Math.max(...products.map(p => p.id)) + 1;
      const newProduct = { 
        id: newId, 
        ...product, 
        created_at: new Date().toISOString().split('T')[0]
      };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_, { id, product }) => {
      const index = products.findIndex(p => p.id == id);
      if (index === -1) throw new Error("Product not found");
      
      const updatedProduct = { ...products[index], ...product };
      products[index] = updatedProduct;
      return updatedProduct;
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex(p => p.id == id);
      if (index === -1) throw new Error("Product not found");
      
      products.splice(index, 1);
      return true;
    }
  },
  Product: {
    loans: (parent) => {
      return itemLoans.filter((loan) => loan.product_id == parent.id);
    },
  }
};
