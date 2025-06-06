import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function createAccount(
  account: Account
): Promise<object | boolean> {
  const { email, password, name, phone } = account;

  if (!email || !password) return false;
  const existingUser = await readAccount(account);
  if (existingUser === true || existingUser === false) return false;

  const niceClient = dynamoClient();
  const request: PutCommandInput = {
    TableName: "logins",
    Item: { email: email, password: password, name: name, phone: phone },
  };

  const response = await niceClient.put(request); // sending the request using the put method
  const newUser = await readAccount(account);
  return newUser;
}
