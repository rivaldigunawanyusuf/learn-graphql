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
  Mutation: {
    createCustomer: (_, { customer }) => {
      const newId = Math.max(...customers.map(c => c.id)) + 1;
      const newCustomer = { 
        id: newId, 
        ...customer, 
        created_at: new Date().toISOString().split('T')[0]
      };
      customers.push(newCustomer);
      return newCustomer;
    },
    updateCustomer: (_, { id, customer }) => {
      const index = customers.findIndex(c => c.id == id);
      if (index === -1) throw new Error("Customer not found");
      
      const updatedCustomer = { ...customers[index], ...customer };
      customers[index] = updatedCustomer;
      return updatedCustomer;
    },
    deleteCustomer: (_, { id }) => {
      const index = customers.findIndex(c => c.id == id);
      if (index === -1) throw new Error("Customer not found");
      
      customers.splice(index, 1);
      return true;
    }
  },
  Customer: {
    loans: (parent) => {
      return itemLoans.filter((loan) => loan.customer_id == parent.id);
    },
  }
};