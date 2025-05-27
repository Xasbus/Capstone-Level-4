import axios from "axios";
import { Account } from "./Account";
import { readAccount } from "./readAccount";

export async function updateAccount(account: Account): Promise<Account> {
  const { email, password, name, phone } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);
  if (!existingUser || existingUser.password !== password) return undefined;

  const url = `http://localhost:8000/update`;
  const data = {
    email,
    password,
    name,
    phone,
  };
  const readUser = await axios.post(url, data);
  const loginData = readUser.data;
  return loginData as Account;
}
