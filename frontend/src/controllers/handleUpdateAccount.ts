import { Account } from "../modules/dataTypes/Account";
import { updateAccount } from "../modules/dataTypes/updateAccount";

export async function handleUpdateAccount(event: any) {
  event.preventDefault();

  const form = event.target;
  const updateEmail = event.target[0].value;
  const updatePassword = event.target[1].value;
  const updateName = form[2].value;
  const updatePhone = form[3].value;

  const data = {
    email: updateEmail,
    password: updatePassword,
    name: updateName,
    phone: updatePhone,
  } as Account;

  const response = await updateAccount(data);

  return response;
}
