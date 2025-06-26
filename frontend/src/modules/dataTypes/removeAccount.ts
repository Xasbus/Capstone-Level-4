import axios from "axios";
import { readAccount } from "./readAccount";
import { Account } from "./Account";
import { databaseUrl } from "../../utils/databaseUrl";

export async function removeAccount(account: Account): Promise<boolean> {
  const { email, password } = account;
  if (!email || !password) return false;

  const userInfo = await readAccount(account);
  if (userInfo === false) return false;

  // const url = `http://localhost:8000/remove`;
  const url: any = databaseUrl();
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);
  const loginData = response.data;

  if (loginData === "OK") return true;
  else return false;
}
