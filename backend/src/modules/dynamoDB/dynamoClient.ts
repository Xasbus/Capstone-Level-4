import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export function dynamoClient() {
  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  return niceClient;
}
