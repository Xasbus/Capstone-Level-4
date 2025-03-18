import React, { useEffect, useState } from "react";
import { SignInModal } from "./SignInModal";
import { SignOutModal } from "./SignOutModal";

export function SignInArea() {
  const [button, setButton] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [isSignedIn]); // Will run everytime isSignedIn changes

  return <>{button}</>;

  function componentDidMount() {
    console.log("MOUNT PHASE: SignInArea");
    setDidMount(true);

    if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
    else setButton(<SignInModal onSignIn={handleSignIn} />);
  }

  function componentDidUpdate() {
    // check to see if didMount is true. Prevents the code from running on mount phase.
    if (didMount) {
      console.log("UPDATE PHASE: SignInArea");

      // check value of isSignedIn - updates the button using setButton
      // if true - sets button to SignOutModal
      // if false - sets button to SignInModal
      if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
      else setButton(<SignInModal onSignIn={handleSignIn} />);
    }
  }

  function handleSignIn() {
    setIsSignedIn(true);
  }
  function handleSignOut() {
    setIsSignedIn(false);
  }
}
