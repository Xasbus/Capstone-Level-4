export const stateVariables = {
  globalAccount: undefined,
  globalMessage: "",

  accountDidMount: false,

  accessoriesDidMount: false,

  consolesDidMount: false,

  contactsDidMount: false,
  contactsOutputMessage: "",

  gamesDidMount: false,

  homeDidMount: false,

  component: "",
};

export type StateVariables = typeof stateVariables;
