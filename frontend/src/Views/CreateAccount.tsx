import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountCreateMessage,
  selectAccountDidMount,
  selectGlobalAccount,
} from "../modules/Redux/stateSelector";
import { set } from "../modules/Redux/store";
import { handleCreateAccount } from "../controllers/handleCreateAccount";

export function CreateAccount() {
  const didMount: boolean = useSelector(selectAccountDidMount);
  const createMessage: string = useSelector(selectAccountCreateMessage);
  let globalAccount: any = useSelector(selectGlobalAccount);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(compontentDidUnmount, []);

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <h5 className="card-header">Create Function</h5>
            <div className="card-body">
              <p className="card-text">
                <input name="email" type="email" />
              </p>
              <p className="card-text">
                <input name="password" type="password" />
              </p>
              <p className="card-text">
                <input name="name" type="text" />
              </p>
              <p className="card-text">
                <input name="phone" type="tel" />
              </p>
              {createMessage}

              <button type="submit" className="btn btn-primary">
                Click Create Button
              </button>
            </div>
          </div>
        </form>
        <hr />
      </main>
      <footer>Website is created by David Billiot</footer>
    </>
  );

  async function handleSubmit(event: any) {
    const account = await handleCreateAccount(event);
    const email = account.email;
    const password = account.password;
    const name = account.name;
    const phone = account.phone;
    const userMessage = `Email is ${email} and Password is ${password}, name is ${name}, phone number is ${phone}`;

    let action = set.accountCreateMessage(userMessage);
    dispatch(action);
  }

  function componentDidMount() {
    document.title = "Playstation - About Page";
    console.log("Title mounted");
  }

  function componentDidUpdate() {
    console.log("Nothing to update.");
  }
  function compontentDidUnmount() {
    console.log("Nothing to unmount.");
  }
}
