import { Handler } from "aws-lambda/handler";

import { FindUserDataFunction } from "@functions/find-user-data-function";
import { FindUserTransactionsFunction } from "@functions/find-user-transactions-functions";
import { GenerateUserReportFunction } from "@functions/generate-user-report-function";
import { SendMailReportFunction } from "@functions/send-mail-report-function";

export const findUserData: Handler = (event, context) => FindUserDataFunction.getInstance().run(event, context);

export const findUserTransactions: Handler = (event, context) => FindUserTransactionsFunction.getInstance().run(event, context);

export const generateUserReport: Handler = (event, context) => GenerateUserReportFunction.getInstance().run(event, context);

export const sendMailReport: Handler = (event, context) => SendMailReportFunction.getInstance().run(event, context);
