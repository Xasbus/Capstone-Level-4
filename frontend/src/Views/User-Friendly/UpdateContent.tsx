import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountUpdateMessage1,
  selectAccountUpdateMessage2,
  selectAccountUpdateMessage3,
  selectGlobalAccount,
} from "../../modules/Redux/stateSelector";
import { handleUpdateAccount } from "../../controllers/handleUpdateAccount";
import { set } from "../../modules/Redux/store";

function UpdateContent() {
  const globalAccount = useSelector(selectGlobalAccount);
  const updateEmail: string = useSelector(selectAccountUpdateMessage1);
  const updateName: string = useSelector(selectAccountUpdateMessage2);
  const updatePhone: string = useSelector(selectAccountUpdateMessage3);

  const dispatch = useDispatch();

  if (globalAccount)
    return (
      <form onSubmit={handleSubmit4}>
        <div className="card" id="divColor">
          <h5 className="card-header" id="formText">
            Update Function
          </h5>
          <div className="card-body">
            <p className="card-text">
              <div id="emailSize">
                <div id="formText">
                  Email: <br />
                </div>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </p>
            <p className="card-text">
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
            <div id="formText">
              {updateEmail}
              <br />
              {updateName}
              <br />
              {updatePhone}
            </div>

            <button type="submit" className="btn btn-primary">
              Click Update Button
            </button>
          </div>
        </div>
      </form>
    );
  async function handleSubmit4(event: any) {
    const account = await handleUpdateAccount(event);
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    const name = form[2].value;
    const phone = form[3].value;

    const userEmail = `Your account with the email: ${email}`;
    // const userPassword = password;
    const userName = `Your name is now recorded as ${name}.`;
    const userPhone = `Your phone number is now recorded as ${phone}`;
    // const userMessage = `Your account with the email: ${email} has been updated. Your name is now recorded as ${name}, and phone number is ${phone}`;

    let action = set.accountUpdateMessage1(userEmail);
    dispatch(action);
    action = set.accountUpdateMessage2(userName);
    dispatch(action);
    action = set.accountUpdateMessage3(userPhone);
    dispatch(action);
  }
}

export default UpdateContent;
