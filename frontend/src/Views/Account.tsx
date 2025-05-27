import React, { useEffect } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountDidMount,
  selectGlobalAccount,
  selectGlobalMessage,
} from "../modules/Redux/stateSelector";
import { set } from "../modules/Redux/store";

export function Account() {
  const didMount: boolean = useSelector(selectAccountDidMount);
  const message: string = useSelector(selectGlobalMessage);
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
            <h5 className="card-header">Read Function</h5>
            <div className="card-body">
              <p className="card-text">
                <input
                  name="email"
                  defaultValue="test@email.com"
                  type="email"
                />
              </p>
              <p className="card-text">
                <input name="password" defaultValue="test" type="password" />
              </p>
              {message}

              <button className="btn btn-primary">Click Read Button</button>
            </div>
          </div>
        </form>
        <hr />
      </main>
      <footer>Website is created by David Billiot</footer>
    </>
  );

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
  async function handleSubmit(event: any) {
    const account = await handleReadAccount(event);
    const email = account.email;
    const password = account.password;
    const userMessage = `Email is ${email} and Password is ${password}`;

    let action = set.globalMessage(userMessage);
    dispatch(action);
  }
}
