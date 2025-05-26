// import { FormEvent } from "react";
import { readAccount } from "../modules/dataTypes/readAccount";
import { Account } from "../modules/dataTypes/Account";

export async function handleReadAccount(event: any) {
  event.preventDefault();

  const form = event.target;
  const readEmail = event.target[0].value;
  const readPassword = event.target[1].value;
  // const readName = form[2].value;
  // const readPhone = form[3].value;

  const data = {
    email: readEmail,
    password: readPassword,
    // name: readName,
    // phone: readPhone,
  } as Account;
  const response = await readAccount(data);

  return response;
}
