import { Account } from "../dataTypes/Account";
import { StateVariables } from "./stateVariables";

export const stateSetters = {
  globalAccount: function (state: StateVariables, action: ActionAccount) {
    const newValue = action.payload;
    state.globalAccount = newValue;
  },
  selectAccountReadMessage: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountReadMessage = newValue;
  },
  selectAccountCreateMessage: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountCreateMessage = newValue;
  },
  selectAccountDeleteMessage: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountDeleteMessage = newValue;
  },
  selectAccountUpdateMessage: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountUpdateMessage = newValue;
  },

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

type ActionAccount = {
  payload: Account | undefined;
  type: string;
};
