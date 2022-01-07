export default {
  Resources: {
    TechTalkReportTable: {
      Type: "AWS::DynamoDB::Table",
      DeletionPolicy: "Retain",
      Properties: {
        TableName: "TechTalkReport",
        BillingMode: "PAY_PER_REQUEST",
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S"
          }
        ],
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH"
          }
        ]
      }
    }
  }
};
