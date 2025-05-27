import { Request, Response } from "express";
import { Account } from "../modules/Types/Account";
import { updateAccount } from "../modules/dynamoDB/updateAccount";

export async function update(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await updateAccount(account);
  response.send(result);
  console.log(`LOG UPDATE: ${result}`);
}
