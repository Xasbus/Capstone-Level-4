import React, { useState } from "react";
import { handleSignIn } from "../../controllers/handleSignIn";
import { SignInContent } from "./SignInContent";
import { set } from "../../modules/Redux/store";
import { useDispatch } from "react-redux";
import { Credentials } from "../../modules/dataTypes/Credentials";

export function SignInModal() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <button
        type="button"
        className="btn btn-primary modalColor"
        data-bs-toggle="modal"
        data-bs-target="#signInModal"
      >
        Log In
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="signInModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modalColor">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signInModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SignInContent errorMessage={errorMessage} />
            </div>
            <div className="modal-footer">
              <button
                id="cancelButton"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                name="closeButton"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  async function handleSubmit(event: any) {
    const account = await handleSignIn(event);
    if (account) {
      const action = set.globalAccount(account);
      dispatch(action);

      const credentials: Credentials = {
        email: account.email,
        password: account.password,
      };
      const loginString = JSON.stringify(credentials); // Need JSON.stringify, because localStorage can only store strings (not objects)
      localStorage.setItem("credentials", loginString); //setItem is a function(mouse over to show) it accepts a key and value
    } else setErrorMessage("The email and password are incorrect.");
  }
}
