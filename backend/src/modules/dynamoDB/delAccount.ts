import { DeleteCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function delAccount(account: Account): Promise<boolean> {
  const { email, password, name, phone } = account;
  if (!email || !password) return false;

  const userInfo = await readAccount(account);
  if (!userInfo || userInfo !== true) return false;

  const niceClient = dynamoClient();
  const request: DeleteCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };

  const response = await niceClient.delete(request);
  return true;
}
