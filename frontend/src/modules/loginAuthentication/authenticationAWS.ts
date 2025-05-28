import axios from "axios";
import { Account } from "../dataTypes/Account";

export async function authenticationAWS(
  userEmail = "",
  userPassword = ""
): Promise<Account | undefined> {
  const url = "http://localhost:8000/read";
  const data = {
    email: userEmail,
    password: userPassword,
  };
  const response = await axios.post(url, data);
  let account = response.data;
  if (!account) account = undefined;
  return account;
}
