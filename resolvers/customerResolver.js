import { customers } from "../data/_customers.js";
import { itemLoans } from "../data/_loans.js";

export const customerResolver = {
  Query: {
    customers: () => customers,
    customer: (parent, args) => {
      const customer = customers.find((customer) => customer.id == args.id);
      if (!customer) throw new Error("Customer not found");
      return customer;
    }
  },
  Customer: {
    loans: (parent) => {
      return itemLoans.filter((loan) => loan.customer_id == parent.id);
    },
  }
};