import React, { useEffect, useState } from "react";
import { NewSignOutModal } from "./NewSignOutModal";
import { NewSignInModal } from "./NewSignInModal";

export function NewSignInArea() {
  const [button, setButton] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [isSignedIn]); // Will run everytime isSignedIn changes

  return <>{button}</>;

  function componentDidMount() {
    console.log("MOUNT PHASE: SignInArea");
    setDidMount(true);

    if (isSignedIn) setButton(<NewSignOutModal onSignOut={handleSignOut} />);
    else setButton(<NewSignInModal onSignIn={handleSignIn} />);
  }

  function componentDidUpdate() {
    // check to see if didMount is true. Prevents the code from running on mount phase.
    if (didMount) {
      console.log("UPDATE PHASE: SignInArea");

      // check value of isSignedIn - updates the button using setButton
      // if true - sets button to SignOutModal
      // if false - sets button to SignInModal
      if (isSignedIn) setButton(<NewSignOutModal onSignOut={handleSignOut} />);
      else setButton(<NewSignInModal onSignIn={handleSignIn} />);
    }
  }

  function handleSignIn() {
    setIsSignedIn(true);
  }
  function handleSignOut() {
    setIsSignedIn(false);
  }
}
