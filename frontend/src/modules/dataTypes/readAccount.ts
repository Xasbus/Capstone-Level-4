import axios from "axios";
import { Account } from "./Account";
import { databaseUrl } from "../../utils/databaseUrl";

export async function readAccount(
  account: Account
): Promise<boolean | Account> {
  let { email, password, name, phone } = account;

  if (!email || !password) return false;

  // const readUrl: any = databaseUrl();
  const readUrl = "http://localhost:8000/read";

  const data = {
    email,
    password,
    name,
    phone,
  };
  const readUser = await axios.post(readUrl, data);
  const loginData = readUser.data;

  if (!loginData) return false;
  if (loginData.password !== password || loginData === "") {
    return false;
  } else return loginData;
}
