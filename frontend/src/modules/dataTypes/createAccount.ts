import axios from "axios";
import { Account } from "./Account";

export async function createAccount(account: Account): Promise<Account> {
  const { email, password, name, phone } = account;

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
