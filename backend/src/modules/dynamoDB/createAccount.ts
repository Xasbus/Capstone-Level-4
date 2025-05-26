import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "../Types/Account";

dotenv.config();

export async function createAccount(account: Account) {
  const { email, password, name, phone } = account;

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
    Item: { email: email, password: password },
  };

  const response = await niceClient.put(request); // sending the request using the put method
  return response;
}
