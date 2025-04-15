import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config(); // This code is how you intialize dotenv
// It attaches the variable in .env to the process object

export function env(request: Request, response: Response) {
  process.env.mode; // .env has variables in this case (mode), added to process.env.myVariableName
  // The value of process.env.mode or mode is development, found in .env file
  const data = { mode: process.env.mode }; // property is mode, and value is after the : which is process.env.mode
  response.send(data);
}
