import { Request, Response } from "express";
import { Account } from "../modules/Types/Account";
import { readAccount } from "../modules/dynamoDB/readAccount";

export async function read(request: Request, response: Response) {
  const account: Account = request.body;
  const result = await readAccount(account);
  response.send(result);
}
