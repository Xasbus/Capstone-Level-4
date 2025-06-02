import axios from "axios";
import { readAccount } from "./readAccount";
import { Account } from "./Account";

export async function removeAccount(account: Account): Promise<boolean> {
  const { email, password } = account;
  if (!email || !password) return false;

  const existingUser = await readAccount(account);

  if (existingUser === false) return false;
  console.log("Account not found or incorrect password");

  const url = `http://localhost:8000/remove`;
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);

  const loginData = response.data;
  debugger;
  if (loginData.password !== password) return false;
  debugger;
  if (loginData === "OK") return true;
  debugger;
}
