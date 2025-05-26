import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "../Types/Account";

dotenv.config();

export async function readAccount(account: Account) {
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

  const request: GetCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };
  if (!email || !password) return undefined;
  const response = await niceClient.get(request); // sending the request using the get method

  const loginData = response.Item;
  return loginData;
}
