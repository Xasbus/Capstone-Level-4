import { Request, Response } from "express";
import { readAccount } from "../modules/dynamoDB/readAccount";
import { Account } from "../modules/Types/Account";

export async function read(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await readAccount(account);
  response.send(result);
}
