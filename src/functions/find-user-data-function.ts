import { User } from "../@types/user";
import { Response } from "../helper/response";

import { CustomResponse } from "./@types";
import { FunctionAbstract } from "./abstracts/functions-abstract";

import { makeUser } from "src/factories/data/user-factory";

interface RequestFunction {}

type ResponseFunction = User;

export class FindUserDataFunction extends FunctionAbstract<RequestFunction, ResponseFunction> {
  static instance: FindUserDataFunction;

  protected buildRequest(request: RequestFunction): RequestFunction {
    return request;
  }

  protected async execute(): Promise<CustomResponse<User>> {
    const user = makeUser();
    return Response.ok(user).build();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}
