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

  homeDidMount: false,
  homeComponent: "",
};

export type StateVariables = typeof stateVariables;
