import { itemLoans } from "../data/_loans.js";
import { products } from "../data/_products.js";
import { customers } from "../data/_customers.js";

export const loanResolver = {
  Query: {
    loans: () => itemLoans,
    loan: (parent, args) => {
      const loan = itemLoans.find((loan) => loan.id == args.id);
      if (!loan) throw new Error("Loan not found");
      return loan;
    }
  },
  Loan: {
    product: (parent) => {
      return products.filter((product) => product.id == parent.product_id);
    },
    customer: (parent) => {
      return customers.filter((customer) => customer.id == parent.customer_id);
    },
  },
};