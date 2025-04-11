import { output } from "../../utils/output.js";
import { getServerResponse3 } from "../../modules/getServerRespone/getServerResponse3.js";
import { parseResponse } from "../../../Archives/parseResponse.js";

export function handleDate(event) {
  event.preventDefault();
  // const dateForm = event.target;
  // const dateInput = dateForm[0];
  // const dateValue = dateInput.value;
  output(` <br>Sumbitting appointment. . .  <br>`);
  const promise = new Promise(getServerResponse3);
  promise.then(parseResponse);
}
