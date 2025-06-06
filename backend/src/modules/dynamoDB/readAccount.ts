import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function readAccount(account: Account): Promise<object | boolean> {
  const { email, password, name, phone } = account;

  if (!email || !password) return false;

  const niceClient = dynamoClient();

  const request: GetCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };

  const response = await niceClient.get(request); // sending the request using the get method
  const loginData = response.Item;

  if (!loginData) {
    return { email, password, name, phone };
  }
  if (loginData.password !== password) {
    return false;
  }
  if (loginData) {
    return true;
  }
}
