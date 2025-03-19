import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

// async and await - allows the use of await that makes a function wait until promise is resolved
export async function handleSignIn(
  event = new Event()
  // onSignIn
) {
  event.preventDefault();

  const inputs = event.target;
  const emailInput = inputs[1];
  const passwordInput = inputs[2];

  const email = emailInput.value;
  const password = passwordInput.value;

  // use a variable to receive the resolve value from await function
  const resolveValue = await authenticationAWS(email, password);
  const isAuthenticated = resolveValue;
  if (isAuthenticated) {
    const closeButton = document.getElementById("cancelButton");
    closeButton.click();
    inputs.reset();
    return "";
    // onSignIn();
  } else return "The email and password are incorrect.";
  // The return value is the resolve value of the function.

  //Instead of setting the errorMessage. It can just return it.
  // Setting the errorMessage from handleSubmit.
}
