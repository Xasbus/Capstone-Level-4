import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  accessKeyId,
  region,
  secretAccessKey,
} from "../../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAWS(email = "", password = "") {
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  };
  // Constructor creates an object from a class.
  // Use new -class name- with () after it.
  // Always starts with Capital letter.
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request = {
    TableName: "logins",
    Key: { email: email },
  };
  const response = await niceClient.get(request);
  const matchingLogin = response.Item;
  if (matchingLogin === undefined) {
    console.log("not an email");
    return false;
  } else {
    const isAuthenticated = password === matchingLogin.password;
    return isAuthenticated;
  }
}

// function handleSubmit(event) {
//   handleSignIn(event, setErrorMessage, onSignIn);
// }

// if (matchingLogin === !undefined) {
//   console.log("not an email");
// } else {
//   const isAuthenticated = password === matchingLogin.password;
//   return isAuthenticated;
// }
