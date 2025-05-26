import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export async function updateAccount(email = "", password = "") {
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

  // After mousing over the update method, intellisense shows us request can be asserted with UpdateCommandInput
  // UpdateCommandInput will now show us AttributeUpdates
  const request: UpdateCommandInput = {
    TableName: "logins",
    Key: { email: "2test2@email.com" },
    AttributeUpdates: { password: { Value: "new2" } },
  };

  const response = await niceClient.update(request); // changing to update allows us to see what is needed to assert the request object
  return response;
}
