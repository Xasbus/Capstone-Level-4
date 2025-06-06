import axios from "axios";
import { readAccount } from "./readAccount";
import { Account } from "./Account";

export async function removeAccount(account: Account): Promise<boolean> {
  const { email, password } = account;
  if (!email || !password) return false;

  const existingUser = await readAccount(account);

  if (existingUser === false) return false;

  const url = `http://localhost:8000/remove`;
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);
  const loginData = response.data;

  if (loginData === "OK") return true;
  else return false;
}
