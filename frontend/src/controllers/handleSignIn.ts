import { Account } from "../modules/dataTypes/Account";
import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

// async and await - allows the use of await that makes a function wait until promise is resolved
export async function handleSignIn(event: Event): Promise<Account | undefined> {
  event.preventDefault();
  const form = event.target.elements;
  const email = form.email.value; // form.email points to the element, but .value gets the value inside the input box
  const password = form.password.value;
  const inputs = event.target;
  const closeButton = form.closeButton;

  // use a variable to receive the resolve value from await function
  const account = await authenticationAWS(email, password);
  if (account) {
    const closeButton = document.getElementById("cancelButton");
    closeButton.click();
    inputs.reset();
  }
  return account;
  // The return value is the resolve value of the function.

  //Instead of setting the errorMessage. It can just return it.
  // Setting the errorMessage from handleSubmit.
}
