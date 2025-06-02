import axios from "axios";
import { Account } from "./Account";

export async function readAccount(
  account: Account
): Promise<boolean | Account> {
  let { email, password } = account;

  if (!email || !password) return false;
  const readUrl = `http://localhost:8000/read`;
  const data = {
    email,
    password,
    // name: "",
    // phone: "",
  };
  const readUser = await axios.post(readUrl, data);
  const loginData = readUser.data;
  if (loginData.password !== password || loginData === "") {
    return false;
  } else return loginData;
}
