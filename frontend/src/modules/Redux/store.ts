import {
  configureStore,
  ConfigureStoreOptions,
  createSlice,
  CreateSliceOptions,
} from "@reduxjs/toolkit";
import { stateVariables } from "./stateVariables";
import { stateSetters } from "./stateSetter";

const sliceOptions: CreateSliceOptions = {
  name: "global", // Describe the state
  initialState: stateVariables,
  reducers: stateSetters, // Slice reducers as state setters
};

const slice = createSlice(sliceOptions);
export const set = slice.actions; // provides us with the set object

const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
export const store = configureStore(storeOptions);
