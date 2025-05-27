import {
  configureStore,
  ConfigureStoreOptions,
  createSlice,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
import { stateVariables } from "./stateVariables";
import { stateSetters } from "./stateSetter";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: stateVariables,
  reducers: stateSetters,
};

const slice = createSlice(sliceOptions);
export const set = slice.actions;

const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
export const store = configureStore(storeOptions);
