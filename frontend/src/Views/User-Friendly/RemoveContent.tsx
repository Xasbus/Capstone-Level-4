import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountDeleteMessage,
  selectGlobalAccount,
} from "../../modules/Redux/stateSelector";
import { handleDeleteAccount } from "../../controllers/handleDeleteAccount";
import { set } from "../../modules/Redux/store";

function RemoveContent() {
  const globalAccount = useSelector(selectGlobalAccount);
  const deleteMessage: string = useSelector(selectAccountDeleteMessage);

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit3}>
      <div className="card" id="divColor">
        <h5 className="card-header" id="formText">
          Remove Function
        </h5>
        <div className="card-body">
          <p className="card-text">
            <div id="emailSize">
              <div id="formText">
                Email: <br />
              </div>
              {/* <input name="email" type="email" /> */}
              <input
                required
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </p>
          <p className="card-text">
            {/* <input name="password" type="password" /> */}
            <div id="emailSize">
              <div id="formText">
                Password: <br />
              </div>
              <input
                required
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
          </p>
          <div id="formText">{deleteMessage}</div>

          <button type="submit" className="btn btn-primary">
            Click to Delete Account
          </button>
        </div>
      </div>
    </form>
  );
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
}

export default RemoveContent;
