import { Request, Response } from "express";
import { createAccount } from "../modules/dynamoDB/createAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function create(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await createAccount(account);
  response.send(result);
  console.log(`LOG:   ${result}`);
}
