import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../modules/Redux/store";
import { selectAccountDidMount } from "../../modules/Redux/stateSelector";
import WelcomeDisplay from "./WelcomeDisplay";
import CreateContent from "./CreateContent";
import UpdateContent from "./UpdateContent";

export function AccountInfoPage() {
  const didMount: boolean = useSelector(selectAccountDidMount);

  const isLoggedIn = localStorage.getItem("credentials");

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
        {!isLoggedIn && <CreateContent />}
        {isLoggedIn && <UpdateContent />}
        <hr />
        <hr />
      </main>
      <footer>
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
