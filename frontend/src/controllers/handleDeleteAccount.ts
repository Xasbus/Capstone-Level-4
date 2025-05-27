import { Account } from "../modules/dataTypes/Account";
import { removeAccount } from "../modules/dataTypes/removeAccount";

export async function handleDeleteAccount(event: any) {
  event.preventDefault();

  const form = event.target;
  const removeEmail = event.target[0].value;
  const removePassword = event.target[1].value;
  //   const removeName = form[2].value;
  //   const removePhone = form[3].value;

  const data = {
    email: removeEmail,
    password: removePassword,
    // name: removeName,
    // phone: removePhone,
  } as Account;

  const response = await removeAccount(data);

  return response;
}
