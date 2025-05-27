import { StateVariables } from "./stateVariables";

export const stateSetters = {
  globalAnswer: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.globalAnswer;
  },

  didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.didMount = newValue;
  },

  clickCount: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.clickCount = newValue;
  },

  message: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.message = newValue;
  },

  component: function (state: StateVariables, action: Action) {
    const newValue = action.payload;
    state.component = newValue;
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
