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
};

export type StateVariables = typeof stateVariables;
