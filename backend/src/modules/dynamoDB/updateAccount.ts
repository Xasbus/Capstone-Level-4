import { UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "./DataType/Account";
import { dynamoClient } from "./dynamoClient";

dotenv.config();

export async function updateAccount(account: Account) {
  const { email, password, name, phone } = account;

  if (!email || !password) return undefined;

  const existingUser = await readAccount(account);

  if (!existingUser || existingUser.password !== password) return undefined;

  const niceClient = dynamoClient();

  // After mousing over the update method, intellisense shows us request can be asserted with UpdateCommandInput
  // UpdateCommandInput will now show us AttributeUpdates
  if (existingUser.password === password) {
    const request: UpdateCommandInput = {
      TableName: "logins",
      Key: { email: email },
      AttributeUpdates: {
        name: { Value: name },
        phone: { Value: phone },
      },
    };

    console.log(`LOG UPDATE: ${name}, ${phone}`);
    const response = await niceClient.update(request); // changing to update allows us to see what is needed to assert the request object

    const newInfo = await readAccount(account);
    if (
      existingUser.name === newInfo.name ||
      existingUser.phone === newInfo.phone
    )
      return newInfo;
  }
}
