import { DeleteCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function delAccount(
  account: Account
): Promise<number | undefined> {
  const { email, password, name, phone } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);

  if (!existingUser || existingUser.password !== password) return undefined;

  const niceClient = dynamoClient();

  const request: DeleteCommandInput = {
    TableName: "logins",
    Key: { email: email },
  };

  const response = await niceClient.delete(request);
  return response.$metadata.httpStatusCode;
}
