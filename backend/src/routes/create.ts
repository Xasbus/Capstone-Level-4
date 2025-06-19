import { Request, Response } from "express";
import { createAccount } from "../modules/dynamoDB/createAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function create(request: Request, response: Response) {
  const account: Account = request.body;
  // console.log("Parsed Account in CREATE:", request.body);
  const result = await createAccount(account);
  // console.log("Database Result in CREATE:", result);
  response.send(result);
}
