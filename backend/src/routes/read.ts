import { Request, Response } from "express";
import { readAccount } from "../modules/dynamoDB/readAccount";
import { Account } from "../modules/dynamoDB/Account";

export async function read(request: Request, response: Response) {
  const email = request.body.email as string;
  const password = request.body.password as string;
  const account: Account = await readAccount(email, password);
  response.send(account);
}
