export const stateVariables = {
  globalAccount: undefined,

  accountDidMount: false,
  accountReadMessage: "",
  accountCreateMessage: "",
  accountDeleteMessage: "",
  accountUpdateMessage: "",

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
