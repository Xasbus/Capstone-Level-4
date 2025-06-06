import { Request, Response } from "express";
import { delAccount } from "../modules/dynamoDB/delAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function remove(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await delAccount(account);
  response.send(result);
}
