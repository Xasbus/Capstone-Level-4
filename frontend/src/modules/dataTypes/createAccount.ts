import axios from "axios";
import { Account } from "./Account";
import { readAccount } from "./readAccount";

export async function createAccount(
  account: Account
): Promise<Account | boolean> {
  const { email, password, name, phone } = account;
  if (!email || !password) return false;
  const existingUser = await readAccount(account);
  if (existingUser) return false;
  debugger;

  const url = `http://localhost:8000/create`;
  const data = {
    email,
    password,
    name,
    phone,
  };
  debugger;
  const createUser = await axios.post(url, data);
  debugger;
  const loginData = createUser.data;
  debugger;
  return loginData as Account;
}
