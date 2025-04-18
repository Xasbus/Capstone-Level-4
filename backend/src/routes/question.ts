import { Request, Response } from "express";
import { getQuestion } from "../modules/getQuestion";

export async function apiQuestion(request: Request, response: Response) {
  const query: any = request.query;
  const result = await getQuestion(query);
  response.send(result);
}
