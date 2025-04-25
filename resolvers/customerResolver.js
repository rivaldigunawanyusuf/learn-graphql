import { customers } from "../data/_customers.js";

export const customerResolver = {
  Query: {
    customers: () => customers,
    customer: (parent, args) => {
      const customer = customers.find((customer) => customer.id == args.id);
      if (!customer) throw new Error("Customer not found");
      return customer;
    }
  }
};