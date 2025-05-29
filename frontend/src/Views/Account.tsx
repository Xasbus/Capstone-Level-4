import React, { useEffect } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import { handleCreateAccount } from "../controllers/handleCreateAccount";
import { handleDeleteAccount } from "../controllers/handleDeleteAccount";
import { handleUpdateAccount } from "../controllers/handleUpdateAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountCreateMessage,
  selectAccountDeleteMessage,
  selectAccountDidMount,
  selectAccountReadMessage,
  // selectAccountUpdateMessage,
  selectGlobalAccount,
} from "../modules/Redux/stateSelector";
import { set } from "../modules/Redux/store";
import { Ai } from "./Ai";

export function Account() {
  const didMount: boolean = useSelector(selectAccountDidMount);
  const readMessage: string = useSelector(selectAccountReadMessage);
  const createMessage: string = useSelector(selectAccountCreateMessage);
  const deleteMessage: string = useSelector(selectAccountDeleteMessage);
  // const updateMessage: string = useSelector(selectAccountUpdateMessage);
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
              {readMessage}

              <button type="submit" className="btn btn-primary">
                Click Read Button
              </button>
            </div>
          </div>
        </form>
        <hr />
        <form onSubmit={handleSubmit2}>
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
              <hr />
              <button type="submit" className="btn btn-primary">
                Click Create Button
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handleSubmit3}>
          <div className="card">
            <h5 className="card-header">Remove Function</h5>
            <div className="card-body">
              <p className="card-text">
                <input name="email" type="email" />
              </p>
              <p className="card-text">
                <input name="password" type="password" />
              </p>
              {deleteMessage}

              <button type="submit" className="btn btn-primary">
                Click Remove Button
              </button>
            </div>
          </div>
        </form>
        <hr />
        <form onSubmit={handleSubmit4}>
          <div className="card">
            <h5 className="card-header">Update Function</h5>
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
              {updateMessage}

              <button type="submit" className="btn btn-primary">
                Click Update Button
              </button>
            </div>
          </div>
        </form>
        <hr />
        <h2>AI STUFF</h2>
        <Ai />
      </main>
      <footer>Website is created by David Billiot</footer>
    </>
  );

  async function handleSubmit(event: any) {
    const account = await handleReadAccount(event);
    const email = account.email;
    const password = account.password;
    const userMessage = `Email is ${email} and Password is ${password}`;

    let action = set.accountReadMessage(userMessage);
    dispatch(action);
  }

  async function handleSubmit2(event: any) {
    const account = await handleCreateAccount(event);
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    const name = form[2].value;
    const phone = form[3].value;
    const userMessage = `Email is ${email} and Password is ${password}, name is ${name}, phone number is ${phone}`;

    let action = set.accountCreateMessage(userMessage);
    dispatch(action);
  }

  async function handleSubmit3(event: any) {
    const account = await handleDeleteAccount(event);
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    // const name = form[2].value;
    // const phone = form[3].value;
    const userMessage = `Your account with the email: ${email} was removed.`;

    let action = set.accountDeleteMessage(userMessage);
    dispatch(action);
  }
  async function handleSubmit4(event: any) {
    const account = await handleUpdateAccount(event);
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    const name = form[2].value;
    const phone = form[3].value;

    const userMessage = `Your account with the email: ${email} has been updated. ${name}, and ${phone}`;

    let action = set.accountUpdateMessage(userMessage);
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
