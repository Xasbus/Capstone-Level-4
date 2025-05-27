import axios from "axios";
import { Account } from "./Account";
import { readAccount } from "./readAccount";

export async function removeAccount(account: Account): Promise<Account> {
  const { email, password } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);
  if (!existingUser) return undefined;
  const url = `http://localhost:8000/remove`;
  const data = {
    email,
    password,
    // name: "",
    // phone: "",
  };
  const readUser = await axios.post(url, data);
  const loginData = readUser.data;
  return loginData as Account;
}
