import { GetCommandInput, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function createAccount(
  account: Account
): Promise<object | boolean> {
  const { email, password, name, phone } = account;

  if (!email || !password) return false;
  // const existingUser = await readAccount(account);

  const niceClient = dynamoClient();
  const request1: GetCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };

  const response1 = await niceClient.get(request1);
  const existingUser = response1.Item;

  if (existingUser) return false;

  const request2: PutCommandInput = {
    TableName: "logins",
    Item: { email, password, name, phone },
  };

  const response2 = await niceClient.put(request2); // sending the request using the put method
  const isSuccessful = response2.$metadata.httpStatusCode === 200;
  if (isSuccessful) return account;
  else return false;
}
