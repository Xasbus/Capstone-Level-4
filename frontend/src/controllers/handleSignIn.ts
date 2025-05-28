import { Account } from "../modules/dataTypes/Account";
import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

// async and await - allows the use of await that makes a function wait until promise is resolved
export async function handleSignIn(event: Event): Promise<Account | undefined> {
  event.preventDefault();
  let form: any = event.target;
  form = form.elements; // wrote extra line to remove ts error. Original was event.target.elements;
  const email = form.email.value;
  const password = form.password.value;
  const inputs: any = event.target;
  const closeButton = form.closeButton;

  const account = await authenticationAWS(email, password);
  if (account) {
    const closeButton = document.getElementById("cancelButton");
    closeButton.click();
    inputs.reset();
  }
  return account;
}
