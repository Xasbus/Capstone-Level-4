import React, { useEffect, useState } from "react";
import { SignOutModal } from "./SignOutModal";
import { SignInModal } from "./SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobalAccount } from "../../modules/Redux/stateSelector";

export function SignInArea() {
  const account = useSelector(selectGlobalAccount);
  const [button, setButton] = useState(<></>);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [account]); // Will run everytime isSignedIn changes

  const dispatch = useDispatch();
  return <>{button}</>;

  function componentDidMount() {
    console.log("MOUNT PHASE: SignInArea");
    setDidMount(true);

    if (account) setButton(<SignOutModal />);
    else setButton(<SignInModal />);
  }

  function componentDidUpdate() {
    // check to see if didMount is true. Prevents the code from running on mount phase.
    if (didMount) {
      console.log("UPDATE PHASE: SignInArea");

      // check value of isSignedIn - updates the button using setButton
      // if true - sets button to SignOutModal
      // if false - sets button to SignInModal
      if (account) setButton(<SignOutModal />);
      else setButton(<SignInModal />);
    }
  }

  // function handleSignIn() {
  //   setIsSignedIn(true);
  // }
  // function handleSignOut() {
  //   setIsSignedIn(false);
  // }
}
