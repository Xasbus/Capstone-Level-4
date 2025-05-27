import axios from "axios";
import { Account } from "./Account";
import { readAccount } from "./readAccount";

export async function createAccount(account: Account): Promise<Account> {
  const { email, password, name, phone } = account;
  if (!email || !password) return undefined;
  const existingUser = await readAccount(account);
  if (existingUser) return undefined;

  const url = `http://localhost:8000/create`;
  const data = {
    email,
    password,
    name,
    phone,
  };
  const createUser = await axios.post(url, data);
  const loginData = createUser.data;
  return loginData as Account;
}
