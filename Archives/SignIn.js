import React, { useEffect } from "react";

export function SignIn() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(compontentDidUnmount, []);
  return (
    <main>
      <img
        alt="PS symbols"
        width="100%"
        height="100px"
        src="https://cdn.glitch.global/484456c7-95c6-4c6d-8254-08d84585b7a3/5003d526-f4f8-4fba-a8d6-edee79f729e3.image.png?v=1722101080517"
      />

      <h1>Sign In</h1>
      <h3>Log In</h3>
      <div className="formClass">
        <form>
          Email Address:
          <br />
          <input type="email" className="emailSize" />
          <p>
            Password:
            <br />
            <input type="password" className="emailSize" />
          </p>
          <p>
            <button type="button">Log In</button>
          </p>
          <h3>Sign Up</h3>
          <p>
            Email Address:
            <br />
            <input type="email" className="emailSize" />
          </p>
          <p>
            Password:
            <br />
            <input type="password" className="emailSize" />
          </p>
          <p>
            Repeat Password:
            <br />
            <input type="password" className="emailSize" />
          </p>
          <p>
            Comments:
            <br />
            <input type="text" className="textAreaSize"></input>
          </p>
          <br />
          <p>Would you like to receive emails?</p>
          <label htmlFor="yesButton">YES</label>
          <input id="yesButton" name="checkButton" type="radio" />
          <br />
          <label htmlFor="noButton">NO</label>
          <input id="noButton" name="checkButton" type="radio" />
          <br />
          <button type="button">Sign Up</button>
        </form>
      </div>
    </main>
  );
  function componentDidMount() {
    document.title = "Playstation - Sign In Page";
    console.log("Title mounted");
  }
  function componentDidUpdate() {
    setTimeout(console.log("Nothing to update."), 1000);
  }
  function compontentDidUnmount() {
    setTimeout(console.log("Nothing to unmount"), 3000);
  }
}
