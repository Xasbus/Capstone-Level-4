import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocument,
  GetCommandInput,
  PutCommandInput,
} from "@aws-sdk/lib-dynamodb";
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

  if (!email || !password) return undefined;

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request: PutCommandInput = {
    TableName: "logins",
    Item: { email: email, password: password, name: name, phone: phone },
  };

  const request1: GetCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };
  if (!email || !password) return undefined;
  const response1 = await niceClient.get(request1);

  if (response1.Item.email === email) {
    return undefined;
  } else {
    const response = await niceClient.put(request); // sending the request using the put method
    return response;
  }
}
