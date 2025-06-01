import axios from "axios";
import { readAccount } from "./readAccount";
import { Account } from "./Account";

export async function removeAccount(
  account: Account
): Promise<Account | undefined> {
  const { email, password } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);

  if (!existingUser || existingUser.password !== password) return undefined;
  const url = `http://localhost:8000/remove`;
  const data = {
    email,
    password,
    // name: "",
    // phone: "",
  };
  debugger;
  const readUser = await axios.post(url, data);
  const loginData = readUser.data;
  debugger;
  return loginData.$metadata.httpStatusCode;
}
