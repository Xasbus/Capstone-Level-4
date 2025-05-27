import { Request, Response } from "express";
import { Account } from "../modules/Types/Account";
import { createAccount } from "../modules/dynamoDB/createAccount";

export async function create(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await createAccount(account);
  response.send(result);
  console.log(`LOG:   ${result}`);
}
