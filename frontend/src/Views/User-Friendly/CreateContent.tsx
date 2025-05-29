import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountCreateMessage,
  selectGlobalAccount,
} from "../../modules/Redux/stateSelector";
import { handleCreateAccount } from "../../controllers/handleCreateAccount";
import { set } from "../../modules/Redux/store";

function CreateContent() {
  const globalAccount: string = useSelector(selectGlobalAccount);
  const createMessage: string = useSelector(selectAccountCreateMessage);

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit2}>
      <div className="card" id="divColor">
        <h5 className="card-header" id="formText">
          Create Function
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
          <p className="card-text">
            {/* <input name="name" type="text" /> */}
            <div id="emailSize">
              <div id="formText">
                Name: <br />
              </div>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
          </p>
          <p className="card-text">
            {/* <input name="phone" type="tel" /> */}
            <div id="emailSize">
              <div id="formText">
                Phone: <br />
              </div>
              <input
                required
                name="phone"
                type="tel"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </p>
          {createMessage}
          <hr />
          <button type="submit" className="btn btn-primary">
            Click Create Button
          </button>
        </div>
      </div>
    </form>
  );
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
}

export default CreateContent;
