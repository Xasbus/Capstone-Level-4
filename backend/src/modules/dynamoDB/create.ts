import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export async function create(email = "", password = "") {
  debugger;
  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request: PutCommandInput = {
    TableName: "logins",
    Item: { email: "new@email.com", password: "new" },
  };

  const response = await niceClient.put(request); // sending the request using the put method
  return response;
}
