import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DeleteCommandInput, DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "../Types/Account";
import { readAccount } from "./readAccount";

dotenv.config();

export async function delAccount(account: Account) {
  const { email, password, name, phone } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);

  if (!existingUser || existingUser.password !== password) return undefined;

  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request: DeleteCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };

  const response = await niceClient.delete(request); // sending the request using the get method
  return response;
}
