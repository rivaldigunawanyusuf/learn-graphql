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
  Mutation: {
    createLoan: (_, { loan }) => {
      const newId = Math.max(...itemLoans.map(l => l.id)) + 1;
      const newLoan = { id: newId, ...loan };
      
      // Verify product exists
      const productExists = products.some(p => p.id == loan.product_id);
      if (!productExists) throw new Error("Product not found");
      
      // Verify customer exists
      const customerExists = customers.some(c => c.id == loan.customer_id);
      if (!customerExists) throw new Error("Customer not found");
      
      itemLoans.push(newLoan);
      return newLoan;
    },
    updateLoan: (_, { id, loan }) => {
      const index = itemLoans.findIndex(l => l.id == id);
      if (index === -1) throw new Error("Loan not found");
      
      // Verify product exists if provided
      if (loan.product_id) {
        const productExists = products.some(p => p.id == loan.product_id);
        if (!productExists) throw new Error("Product not found");
      }
      
      // Verify customer exists if provided
      if (loan.customer_id) {
        const customerExists = customers.some(c => c.id == loan.customer_id);
        if (!customerExists) throw new Error("Customer not found");
      }
      
      const updatedLoan = { ...itemLoans[index], ...loan };
      itemLoans[index] = updatedLoan;
      return updatedLoan;
    },
    deleteLoan: (_, { id }) => {
      const index = itemLoans.findIndex(l => l.id == id);
      if (index === -1) throw new Error("Loan not found");
      
      itemLoans.splice(index, 1);
      return true;
    }
  },
  Loan: {
    product: (parent) => {
      return products.filter((product) => product.id == parent.product_id);
    },
    customer: (parent) => {
      return customers.filter((customer) => customer.id == parent.customer_id);
    },
  }
};