/**************************************************************
 * @summary Redirects the SPA to the root path
 * @param rootPath Set this to the correct root path
 * @description
 * Useful when an SPA page is refreshed.
 * Load this module through 404.html to redirect on 404 errors.
 * By redirecting to the root path, 404 errors are removed.
 * Use Redirect.js to redirect to the path where the 404 occured.
 **************************************************************/

const rootPath = "/Capstone-Lvl-3";
const path = window.location.pathname; //getting current path afer the domain with pathname
// saving the pathname to path and saving it in localStorage
window.localStorage.setItem("redirect", path); // stores key and value in browser memory
window.location.replace(rootPath);
