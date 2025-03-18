import React from "react";

export function SignInContent(props) {
  const errorMessage = props.errorMessage;
  return (
    <>
      <div className="bold">Would you like to log in?</div>
      <br />
      <div>
        Email <i className="bi bi-envelope-at"></i> :
        <input type="email" required />
      </div>
      <div>
        Password: <input type="password" required />
      </div>
      <div style={{ color: "red" }}>{errorMessage}</div>
    </>
  );
}
