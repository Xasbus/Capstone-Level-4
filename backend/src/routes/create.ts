import { Request, Response } from "express";
import { Account } from "../modules/Types/Account";
import { createAccount } from "../modules/dynamoDB/createAccount";

export async function create(request: Request, response: Response) {
  const email = request.body.email as string;
  const password = request.body.password as string;
  const name = request.body.name as string;
  const phone = request.body.name as string;
  const account: Account = await createAccount();
  response.send(account);
}
