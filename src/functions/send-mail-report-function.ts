import { Transaction } from "../@types/transaction";
import { User } from "../@types/user";
import { Response } from "../helper/response";

import { CustomResponse } from "./@types";
import { FunctionAbstract } from "./abstracts/functions-abstract";

interface RequestFunction {
  transactions: Transaction[];
  user: User;
  report: {
    totalBalance: number;
  };
}

type ResponseFunction = void;

export class SendMailReportFunction extends FunctionAbstract<RequestFunction, ResponseFunction> {
  static instance: SendMailReportFunction;

  protected buildRequest(request: RequestFunction): RequestFunction {
    return request;
  }

  protected async execute(request: RequestFunction): Promise<CustomResponse<void>> {
    // eslint-disable-next-line no-console
    console.log("sending email with data", request);

    return Response.noContent().build();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}
