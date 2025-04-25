import { products } from "../data/_products.js";

export const productResolver = {
  Query: {
    products: () => products,
    product: (parent, args) => {
      const product = products.find((product) => product.id == args.id);
      if (!product) throw new Error("Product not found");
      return product;
    }
  }
};
