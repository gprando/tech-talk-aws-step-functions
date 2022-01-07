import { Transaction } from "../@types/transaction";
import { makeTransactions } from "../factories/data/transactions-factory";
import { Response } from "../helper/response";

import { CustomResponse } from "./@types";
import { FunctionAbstract } from "./abstracts/functions-abstract";

interface RequestFunction {}

type ResponseFunction = Transaction[];

export class FindUserTransactionsFunction extends FunctionAbstract<RequestFunction, ResponseFunction> {
  static instance: FindUserTransactionsFunction;

  protected buildRequest(request: RequestFunction): RequestFunction {
    return request;
  }

  protected async execute(): Promise<CustomResponse<ResponseFunction>> {
    const transactions = makeTransactions();
    return Response.ok(transactions).build();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}
