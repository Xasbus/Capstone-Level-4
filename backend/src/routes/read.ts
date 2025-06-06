import { Request, Response } from "express";
import { readAccount } from "../modules/dynamoDB/readAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function read(request: Request, response: Response) {
  const account: Account = request.body;
  console.log("Parsed Account:", request.body);
  const result = await readAccount(account);
  console.log("Database Result:", result);
  response.send(result);
}
