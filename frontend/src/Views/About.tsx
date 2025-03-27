import React, { useEffect } from "react";

export function About() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(compontentDidUnmount, []);
  return (
    <>
      <main>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Home</b>
            <div>
              Basic html layout, external css, bootstrap, bookmarks, classes,
              nav bar, image map
            </div>
          </li>
          <li className="list-group-item">
            <b>Games</b>
            <div>Alerts, Badges</div>
          </li>

          <li className="list-group-item">
            <b>Consoles</b>
            <div>
              Bootstrap cards, Span usage, cards, object, javascript, array, for
              loop
            </div>
          </li>

          <li className="list-group-item">
            <b>Accessories</b>
            <div>
              functions, guessing game, Internal CSS, Javascript, on-click
              button, table
            </div>
          </li>

          <li className="list-group-item">
            <b>Sign In</b>
            <div>
              Border style, inputs, textarea, radio buttons, normal button,
              labels, form
            </div>
          </li>

          <li className="list-group-item">
            <b>About</b>
            <div>Lists points of interest in each page</div>
          </li>

          <li className="list-group-item">
            <b>Contact</b>
            <div>Contact info, Submit request form</div>
          </li>
        </ul>
        <hr />
      </main>
      <footer>Website is created by David Billiot</footer>
    </>
  );
  function componentDidMount() {
    document.title = "Playstation - About Page";
    console.log("Title mounted");
  }

  function componentDidUpdate() {
    setTimeout(console.log("Nothing to update."), 2000);
  }
  function compontentDidUnmount() {
    setTimeout(console.log("Nothing to unmount."), 3000);
  }
}
