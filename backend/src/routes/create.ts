import { Request, Response } from "express";
import { createAccount } from "../modules/dynamoDB/createAccount";
import { Account } from "../modules/Types/Account";

export async function create(request: Request, response: Response) {
  const account: Account = request.body;
  const email = request.body.email as string;
  const password = request.body.password as string;
  const name = request.body.name as string;
  const phone = request.body.name as string;
  const result = await createAccount(account);
  response.send(result);
}
