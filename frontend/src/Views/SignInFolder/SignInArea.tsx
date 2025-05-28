import React, { useEffect, useState } from "react";
import { SignOutModal } from "./SignOutModal";
import { SignInModal } from "./SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAccount } from "../../modules/Redux/stateSelector";

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
}
