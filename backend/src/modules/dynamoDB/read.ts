import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export async function read(email = "", password = "") {
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

  const request = {
    TableName: "logins",
    Key: { email: "test@email.com" },
  };

  const response = await niceClient.get(request); // sending the request using the get method
  const loginData = response.Item;
}
