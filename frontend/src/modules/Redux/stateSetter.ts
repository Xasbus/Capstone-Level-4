import { StateVariables } from "./stateVariables";

export const stateSetters = {
  accessoriesDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.accessoriesDidMount = newValue;
  },
  accountDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.accountDidMount = newValue;
  },
  consolesDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.consolesDidMount = newValue;
  },
  contactsDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.contactsDidMount = newValue;
  },
  contactOutputMessage: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactsOutputMessage = newValue;
  },
  gamesDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.gamesDidMount = newValue;
  },
  homeDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.homeDidMount = newValue;
  },
};

type ActionBoolean = {
  payload: boolean;
  type: string;
};

type ActionString = {
  payload: string;
  type: string;
};

type Action = {
  payload: any;
  type: string;
};
