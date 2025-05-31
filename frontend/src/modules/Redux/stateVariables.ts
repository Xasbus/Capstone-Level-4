export const stateVariables = {
  globalAccount: undefined,
  globalAnswer: "",
  globalCredentials: undefined,

  accountDidMount: false,
  accountReadMessage: "",
  accountCreateMessage: "",
  accountDeleteMessage: "",
  accountUpdateMessage1: "",
  accountUpdateMessage2: "",
  accountUpdateMessage3: "",

  accessoriesDidMount: false,

  consolesDidMount: false,

  contactsDidMount: false,
  contactsOutputMessage: "",

  gamesDidMount: false,
  gameComponent1: "",
  gameComponent2: "",
  gameComponent3: "",
  gameComponent4: "",
  gameComponent5: "",

  homeDidMount: false,
  homeComponent: "",

  apiUrl: (() => {
    let apiUrl;

    // Ternary Operators (shorthand for--> if else)
    // synatax is--> condition ? value_if_true : value_if_false

    if (window.location.hostname.includes("localhost")) {
      apiUrl = window.location.hostname.includes("9000") // .includes a full check of whats coming it.
        ? "http://localhost:9000" // Local Google Cloud backend
        : "http://localhost:8000"; // Local AWS Lambda backend
    } else {
      apiUrl = window.location.hostname.includes("lambda")
        ? "https://lpyqdwgkcrzfk553sygn7ijile0vzovm.lambda-url.us-east-2.on.aws" // Use Lambda if domain includes "lambda"
        : "https://lvl-4-capstone.uc.r.appspot.com"; // Otherwise, use Google Cloud
    }

    return apiUrl;
  })(), //  apiUrl is my variable. Instead of using "" or false like previous. I used a function.
};

export type StateVariables = typeof stateVariables;
