import { Request, Response } from "express";
import { Account } from "../modules/Types/Account";
import { delAccount } from "../modules/dynamoDB/delAccount";

export async function remove(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await delAccount(account);
  response.send(result);
}
