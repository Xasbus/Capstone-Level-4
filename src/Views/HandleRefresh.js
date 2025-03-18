import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*************************************************
 * @summary Removes the 404 error on SPA refresh
 * @param props.children The elements to render on refresh
 * @description
 * This component depends on the local storage used by redirect.js
 * In redirect.js, properly set the root path.
 **************************************************/
export function HandleRefresh(props) {
  const children = props.children;
  const navigateTo = useNavigate();
  // the hook gives functions the ability to use BroswerRouter
  // useNavigate hook so it refreshes to the last page user is on.
  // returns a functions (navigateTo) that accepts a path string
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  if (didMount) return <>{children}</>;
  else return <></>;

  function componentDidMount() {
    const redirectPath = localStorage.getItem("redirect"); // returns the value of a key
    if (redirectPath) {
      navigateTo(redirectPath); // BrowserRouter will load the path string in redirectPath
      localStorage.setItem("redirect", "");
      setTimeout(() => setDidMount(true), 1000);
    } else setDidMount(true);
  }
}
