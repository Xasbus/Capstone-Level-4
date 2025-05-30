import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "./DataType/Account";

dotenv.config();

export async function createAccount(account: Account) {
  const { email, password, name, phone } = account;

  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);
  if (existingUser) return undefined;

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
    Item: { email: email, password: password, name: name, phone: phone },
  };

  const response = await niceClient.put(request); // sending the request using the put method

  const newUser = await readAccount(account);
  console.log(newUser);
  return newUser;
}
