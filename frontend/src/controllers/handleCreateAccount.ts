import { Account } from "../modules/dataTypes/Account";
import { createAccount } from "../modules/dataTypes/createAccount";

export async function handleCreateAccount(event: any) {
  event.preventDefault();

  const form = event.target;
  const createEmail = event.target[0].value;
  const createPassword = event.target[1].value;
  const createName = form[2].value;
  const createPhone = form[3].value;

  const data = {
    email: createEmail,
    password: createPassword,
    name: createName,
    phone: createPhone,
  } as Account;

  const response = await createAccount(data);

  return response;
}
