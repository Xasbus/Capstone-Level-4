export function apiUrl() {
  // Ternary Operators (shorthand for--> if else)
  // synatax is--> condition ? value_if_true : value_if_false
  let apiUrl;
  if (window.location.hostname.includes("localhost")) {
    apiUrl = window.location.hostname.includes("9000") // .includes a full check of whats coming it. // condition
      ? "http://localhost:9000" // Local Google Cloud backend // value_if_true
      : "http://localhost:8000"; // Local AWS Lambda backend // value_if_false
  } else {
    apiUrl = window.location.hostname.includes("lambda")
      ? "https://lpyqdwgkcrzfk553sygn7ijile0vzovm.lambda-url.us-east-2.on.aws" // Use Lambda if domain includes "lambda"
      : "https://lvl-4-capstone.uc.r.appspot.com"; // Otherwise, use Google Cloud
  }

  return apiUrl;
}
