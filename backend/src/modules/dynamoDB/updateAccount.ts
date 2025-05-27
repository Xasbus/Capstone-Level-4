import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { readAccount } from "./readAccount";
import { Account } from "../Types/Account";

dotenv.config();
debugger;
export async function updateAccount(account: Account) {
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

  // After mousing over the update method, intellisense shows us request can be asserted with UpdateCommandInput
  // UpdateCommandInput will now show us AttributeUpdates

  const request: UpdateCommandInput = {
    TableName: "logins",
    Key: { email: email },
    AttributeUpdates: {
      name: { Value: name },
      phone: { Value: phone },
    },
  };
  debugger;
  console.log(`LOG UPDATE: ${name}, ${phone}`);
  const response = await niceClient.update(request); // changing to update allows us to see what is needed to assert the request object
  return response;
}
