import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DeleteCommandInput, DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export async function delAccount(email = "", password = "") {
  debugger;
  const apiKey = {
    region: process.env.region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request: DeleteCommandInput = {
    TableName: "logins",
    Key: { email: "1test1@email.com" },
  };

  const response = await niceClient.delete(request); // sending the request using the get method
  return response;
}
