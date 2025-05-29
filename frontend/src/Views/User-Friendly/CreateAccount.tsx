import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/Redux/store";

import { selectAccountDidMount } from "../../modules/Redux/stateSelector";
import WelcomeDisplay from "./WelcomeDisplay";

export function AccountInfoPage() {
  const didMount: boolean = useSelector(selectAccountDidMount);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(componentDidUnmount, []);

  const dispatch = useDispatch();

  return (
    <>
      <main>
        <h1>ACCOUNT INFO PAGE</h1>
        <hr />
        <WelcomeDisplay />
      </main>
      <footer>
        <div>
          <div className="row">
            <div className="col">
              <a href="#playstation5">PlayStation 5</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="#playstation4">PlayStation 4</a>
            </div>
          </div>
          <div>
            <div className="col">
              <a href="#playstationvr">PlayStation VR2</a>
            </div>
          </div>
        </div>
        <div className="creatorName">Website created by David Billiot</div>
      </footer>
    </>
  );

  function componentDidMount() {
    document.title = "Playstation - Account Page";
    console.log("Title mounted");
    let action = set.accountDidMount(true);
    dispatch(action);
  }
  function componentDidUpdate() {
    if (didMount) {
      console.log("this is the update phase");
    }
  }
  function componentDidUnmount() {
    return () => {
      console.log("Homepage has unmounted");
    };
  }
}
