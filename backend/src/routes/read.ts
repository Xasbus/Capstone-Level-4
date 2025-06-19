import { Request, Response } from "express";
import { readAccount } from "../modules/dynamoDB/readAccount";
import { Account } from "../modules/dynamoDB/DataType/Account";

export async function read(request: Request, response: Response) {
  const account: Account = request.body;
  debugger;
  const result = await readAccount(account);
  debugger;
  // console.log("Database Result in READ:", result);
  response.send(result);
}
