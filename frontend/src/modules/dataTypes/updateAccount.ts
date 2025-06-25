import axios from "axios";
import { Account } from "./Account";
import { readAccount } from "./readAccount";
import { databaseUrl } from "../../utils/databaseUrl";

export async function updateAccount(
  account: Account
): Promise<Account | boolean> {
  const { email, password, name, phone } = account;
  if (!email || !password) return false;
  const existingUser = await readAccount(account);
  if (!existingUser || existingUser.password !== password) return false;

  // const url = `http://localhost:8000/update`;
  const url: any = databaseUrl();
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
