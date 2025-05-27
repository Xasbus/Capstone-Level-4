import { StateVariables } from "./stateVariables";

export function selectGlobalAccount(state: StateVariables) {
  const { globalAccount } = state;
  return globalAccount;
}
export function selectAccountReadMessage(state: StateVariables): string {
  const { accountReadMessage } = state;
  return accountReadMessage;
}
export function selectAccountCreateMessage(state: StateVariables): string {
  const { accountCreateMessage } = state;
  return accountCreateMessage;
}
export function selectAccountDeleteMessage(state: StateVariables): string {
  const { accountDeleteMessage } = state;
  return accountDeleteMessage;
}
export function selectAccountUpdateMessage(state: StateVariables): string {
  const { accountUpdateMessage } = state;
  return accountUpdateMessage;
}
export function selectAccountDidMount(state: StateVariables): boolean {
  const { accountDidMount } = state;
  return accountDidMount;
}
export function selectAccessoriesDidMount(state: StateVariables): boolean {
  const { accessoriesDidMount } = state;
  return accessoriesDidMount;
}
export function selectConsolesDidMount(state: StateVariables): boolean {
  const { consolesDidMount } = state;
  return consolesDidMount;
}
export function selectContactsDidMount(state: StateVariables): boolean {
  const { contactsDidMount } = state;
  return contactsDidMount;
}
export function selectContactsOutputMessage(state: StateVariables): string {
  const { contactsOutputMessage } = state;
  return contactsOutputMessage;
}
export function selectGamesDidMount(state: StateVariables): boolean {
  const { gamesDidMount } = state;
  return gamesDidMount;
}
export function selectHomeDidMount(state: StateVariables): boolean {
  const { homeDidMount } = state;
  return homeDidMount;
}
