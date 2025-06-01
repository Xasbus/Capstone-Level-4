import React from "react";
import { useSelector } from "react-redux";
import { selectGlobalAccount } from "../../modules/Redux/stateSelector";

function WelcomeDisplay() {
  const globalAccount = useSelector(selectGlobalAccount);

  if (globalAccount)
    return <h3 id="formText">Welcome, {globalAccount.name}!</h3>;
  else {
    return (
      <div id="formText">
        I am sorry. You are not logged in. Please Log In first at the top of the
        page. Don't have an account? Sign Up below and join us.
      </div>
    );
  }
}

export default WelcomeDisplay;
