import React, { useEffect, useState } from "react";
import { SignOutModal } from "./SignOutModal";
import { SignInModal } from "./SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAccount } from "../../modules/Redux/stateSelector";
import { Credentials } from "../../modules/dataTypes/Credentials";
import { authenticationAWS } from "../../modules/loginAuthentication/authenticationAWS";
import { Account } from "../../modules/dataTypes/Account";
import { set } from "../../modules/Redux/store";

export function SignInArea() {
  const account = useSelector(selectGlobalAccount);

  const [button, setButton] = useState(<></>);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [account]);

  const dispatch = useDispatch();
  return <>{button}</>;

  function componentDidMount() {
    console.log("MOUNT PHASE: SignInArea");
    setDidMount(true);

    getPersistentLogin();

    if (account) setButton(<SignOutModal />); // child components
    else setButton(<SignInModal />);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("UPDATE PHASE: SignInArea");
      if (account) setButton(<SignOutModal />);
      else setButton(<SignInModal />);
    }
  }

  async function getPersistentLogin() {
    let account: Account = undefined;
    const login = localStorage.getItem("credentials");
    if (login) {
      const credentials: Credentials = JSON.parse(login); // convert login object with JSON.parse
      const { email, password } = credentials;
      account = await authenticationAWS(email, password);
      if (account) {
        const action = set.globalAccount(account);
        dispatch(action);
      } else localStorage.setItem("credentials", "");
    }
    if (account) setButton(<SignOutModal />);
    else setButton(<SignInModal />);
  }
}
