import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { Account } from "./Account";

dotenv.config();

export async function readAccount(
  targetEmail: string,
  targetPassword: string
): Promise<Account | undefined> {
  if (typeof targetEmail === "object") return undefined;
  const isEmailFalsey = !targetEmail;
  if (isEmailFalsey) return undefined;
  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request: GetCommandInput = {
    TableName: "logins",
    Key: { email: "test@email.com" },
  };

  const response = await niceClient.get(request); // sending the request using the get method
  const loginData = response.Item;
  return loginData;
}
