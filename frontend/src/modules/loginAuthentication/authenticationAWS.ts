import axios from "axios";

export async function authenticationAWS(
  userEmail = "",
  userPassword = ""
): Promise<boolean> {
  const url = "http://localhost:8000/read";
  const data = {
    email: userEmail,
    password: userPassword,
  };
  const response = await axios.post(url, data);
  return false;
}
