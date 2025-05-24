import { Request, Response } from "express";
import { read } from "../modules/dynamoDB/read";
import { create } from "../modules/dynamoDB/create";
import { update } from "../modules/dynamoDB/update";
import { del } from "../modules/dynamoDB/del";

export async function crud(request: Request, response: Response) {
  const result1 = await read();
  // const result2 = await create();
  // const result3 = await update();
  // const result4 = await del();
  response.send(result1);
  // response.send(result2);
  // response.send(result3);
  // response.send(result4);
}
