import faker = require("faker");

import { Transaction } from "../../@types/transaction";

export const makeTransactions = (quantity = 10) => {
  return [...Array(quantity).keys()].map<Transaction>((_, i) => ({
    id: faker.datatype.uuid(),
    createBy: faker.name.firstName() + faker.name.lastName(),
    date: faker.datatype.datetime().toDateString(),
    type: i % 2 === 0 ? "income" : "outcome",
    value: faker.datatype.float(2)
  }));
};
