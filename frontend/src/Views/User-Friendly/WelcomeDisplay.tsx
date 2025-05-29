import React from "react";
import { useSelector } from "react-redux";
import { selectGlobalAccount } from "../../modules/Redux/stateSelector";

function WelcomeDisplay() {
  const account = useSelector(selectGlobalAccount);

  if (account && account.name) {
    return <h3>Welcome, {account.name}!</h3>;
  } else {
    return (
      <p>
        I am sorry. You are not logged in. Please Log In first at the top of the
        page.
      </p>
    );
  }
}

export default WelcomeDisplay;
