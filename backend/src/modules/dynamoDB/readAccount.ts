import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function readAccount(
  account: Account
): Promise<object | undefined> {
  const { email, password, name, phone } = account;

  const niceClient = dynamoClient();

  const request: GetCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };
  console.log(request);

  if (!email || !password) return undefined;

  const response = await niceClient.get(request); // sending the request using the get method

  const loginData = response.Item;
  if (!loginData || loginData.password !== password) return undefined;

  return loginData;
}
