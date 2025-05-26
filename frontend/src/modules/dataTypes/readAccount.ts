import axios from "axios";
import { Account } from "./Account";

export async function readAccount(account: Account): Promise<Account> {
  const { email, password } = account;

  const readUrl = `http://localhost:8000/read`;
  const data = {
    email,
    password,
    // name: "",
    // phone: "",
  };
  debugger;
  const readUser = await axios.post(readUrl, data);
  debugger;
  const loginData = readUser.data;
  return loginData as Account;
}
