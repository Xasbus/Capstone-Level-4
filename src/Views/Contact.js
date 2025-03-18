import React, { useEffect, useState } from "react";

import selfPic from "../../assets/contactphoto.jpg";
import { getServerResponse1 } from "../modules/getServerRespone/getServerResponse1.js";
import { getServerResponse3 } from "../modules/getServerRespone/getServerResponse3.js";
import { getServerResponse2 } from "../modules/getServerRespone/getServerResponse2.js";

export function Contact() {
  // search isolate
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);

  // State variables affects whats rendered.
  // search variables
  const [outputMessage, setOutputMessage] = useState("");
  return (
    <>
      <main>
        <section>
          <div>
            <div className="row">
              <div className="col">
                <img alt="self pic" height="100%" width="125px" src={selfPic} />
              </div>
              <div className="col">
                <h1>Contact Us</h1>
                <i className="bi bi-envelope-at-fill"></i>{" "}
                BlahNonsense283@something.com
                <br />
                📞 985 - 555 - 5555
                <br />
                <i className="bi bi-facebook"></i>
                @NotRealDavidFB
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Contact Customer Service</h3>
          <form onSubmit={handleEmail}>
            <fieldset id="emailSize">
              <legend>
                Email: <br />
              </legend>

              <input
                required
                name="myEmail"
                type="email"
                placeholder="Enter Your Email"
              />
            </fieldset>
            <label htmlFor="summary">Summary of Issue:</label>

            <br />
            <input type="text" placeholder="Text Here" id="summary" />
            <p>
              <input type="submit" />
            </p>
          </form>
        </section>
        <section>
          <h3>Submit an appointment by phone</h3>
          <form onSubmit={handlePhone}>
            Schedule a phone appointment:
            <br />
            <p>
              <input
                type="tel"
                placeholder="XXX-XXX-XXXX"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneInput"
              />
            </p>
            <input type="submit" />
          </form>
          <br />
          <form onSubmit={handleDate}>
            Select date and time:
            <br />
            <p>
              <input type="datetime-local" />
            </p>
            <input type="submit" />
          </form>
        </section>
        <output>{outputMessage}</output>
      </main>
      <footer>
        <p className="creatorName">Website created by David Billiot</p>
      </footer>
    </>
  );

  function componentDidMount() {
    document.title = "Playstation - Contact Page";
    console.log("Title mounted");
  }
  function componentDidUpdate() {
    setTimeout(console.log("Nothing to update."), 2000);
  }
  function componentDidUnmount() {
    return () => {
      console.log("Component has unmounted");
    };
  }

  // Moved parseResponse inside so the handlers can have access to it.
  function parseResponse(resolveValue) {
    const response = JSON.parse(resolveValue);
    const message = response.message;
    setOutputMessage(message);
  }

  // Handlers inside so they can have access to the setOutputMessage.
  // Extracted them from controllers, adjusted, and moved old files to Archives.
  function handleEmail(event) {
    event.preventDefault();
    setOutputMessage(` <br>Submitting your concerns. . . `);
    const promise = new Promise(getServerResponse1);
    promise.then(parseResponse);
    // Promise are classes that run callback functions. getServerResponse1
    // .then lets the code know it has to run after the resolve is done.
  }
  function handleDate(event) {
    event.preventDefault();
    setOutputMessage(` <br>Sumbitting appointment. . .  <br>`);
    const promise = new Promise(getServerResponse3);
    promise.then(parseResponse);
  }
  function handlePhone(event) {
    event.preventDefault();
    setOutputMessage(` <br>Your info is being processed. . .<br>`);
    const promise = new Promise(getServerResponse2);
    promise.then(parseResponse);
  }
}
