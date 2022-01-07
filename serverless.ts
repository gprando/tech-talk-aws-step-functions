import type { AWS } from "@serverless/typescript";

import resources from "./resources";

const service = "tech-talk-aws-step-functions";

const configuration: AWS = {
  service,
  variablesResolutionMode: "20210326",
  frameworkVersion: "2",
  functions: {
    findUserData: {
      handler: "src/handler.findUserData"
    },
    findUserTransactions: {
      handler: "src/handler.findUserTransactions"
    },
    generateUserReport: {
      handler: "src/handler.generateUserReport"
    },
    sendMailReport: {
      handler: "src/handler.sendMailReport"
    }
  },
  resources,
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    lambdaHashingVersion: "20201221",
    stage: "dev",
    profile: "dev",
    region: "us-east-1",
    versionFunctions: false,
    timeout: 40,
    apiName: service,
    tracing: {
      apiGateway: true,
      lambda: true
    },
    iam: {
      role: {
        name: `${service}-lambda-role`,
        statements: []
      }
    }
  },

  custom: {
    cfStacks: {},
    stage: "${opt:stage,'dev'}",
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
      packager: "yarn",
      packagerOptions: {
        scripts: ["yarn autoclean --init", "yarn autoclean --force"]
      }
    }
  },
  plugins: ["serverless-webpack", "serverless-offline", "serverless-step-functions"]
};

module.exports = configuration;
