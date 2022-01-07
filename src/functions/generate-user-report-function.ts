import faker = require("faker");

import { Transaction } from "../@types/transaction";
import { User } from "../@types/user";
import { Response } from "../helper/response";

import { CustomResponse } from "./@types";
import { FunctionAbstract } from "./abstracts/functions-abstract";

interface RequestFunction {
  transactions: Transaction[];
  user: User;
}

interface ResponseFunction {
  id: string;
  transactions: Transaction[];
  user: User;
  report: {
    totalBalance: number;
  };
}

export class GenerateUserReportFunction extends FunctionAbstract<RequestFunction, ResponseFunction> {
  static instance: GenerateUserReportFunction;

  protected buildRequest(request: RequestFunction): RequestFunction {
    return request;
  }

  protected async execute({ transactions, user }: RequestFunction): Promise<CustomResponse<ResponseFunction>> {
    const totalBalance = this.getTotalBalance(transactions);

    const report = {
      id: faker.datatype.uuid(),
      transactions,
      user,
      report: {
        totalBalance
      }
    };

    return Response.ok(report).build();
  }

  private getTotalBalance(transaction: Transaction[]): number {
    return transaction.reduce((accumulator, current) => {
      const total = accumulator;
      return current.type === "income" ? total + current.value : total - current.value;
    }, 0);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}
