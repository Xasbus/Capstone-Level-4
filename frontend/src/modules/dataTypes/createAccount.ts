import axios from "axios";
import { Account } from "./Account";
import { databaseUrl } from "../../utils/databaseUrl";

export async function createAccount(
  account: Account
): Promise<boolean | Account> {
  const { email, password, name, phone } = account;

  if (!email || !password) return false;

  // const readUrl = "http://localhost:8000/create";
  const readUrl = databaseUrl();
  const data1 = {
    email,
    password,
    name,
    phone,
  };
  const response1 = await axios.post(readUrl, data1);
  const existingUser = response1.data;
  if (existingUser) return false;

  // const url = "http://localhost:8000/create";
  const url: any = databaseUrl();
  const data2 = {
    email,
    password,
    name,
    phone,
  };

  const response = await axios.post(url, data2);
  const loginData: Account = response.data;
  if (!loginData) return data2 as Account;
}
