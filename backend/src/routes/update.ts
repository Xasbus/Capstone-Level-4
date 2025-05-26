import { Request, Response } from "express";
import { update } from "../modules/dynamoDB/updateAccount";

export async function crud(request: Request, response: Response) {
  const result = await update();
  response.send(result);
}
