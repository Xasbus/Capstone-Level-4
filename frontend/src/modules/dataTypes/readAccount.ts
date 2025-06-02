import axios from "axios";
import { Account } from "./Account";

export async function readAccount(account: Account): Promise<Account> {
  let { email, password } = account;

  if (!email || !password) return undefined;

  const readUrl = `http://localhost:8000/read`;
  const data = {
    email,
    password,
    // name: "",
    // phone: "",
  };
  const readUser = await axios.post(readUrl, data);
  const loginData = readUser.data;

  if (!loginData || !loginData.email || loginData.password !== password) {
    return undefined;
  }

  debugger;

  return loginData as Account;
}
