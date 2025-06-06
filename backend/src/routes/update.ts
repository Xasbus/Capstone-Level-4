import { Request, Response } from "express";
import { updateAccount } from "../modules/dynamoDB/updateAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function update(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await updateAccount(account);
  response.send(result);
  console.log(`LOG UPDATE: ${result}`);
}
