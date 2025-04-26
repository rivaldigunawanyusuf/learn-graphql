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
  Product: {
    loans: (parent) => {
      return itemLoans.filter((loan) => loan.product_id == parent.id);
    },
  }
};
