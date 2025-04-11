import { output } from "../../utils/output.js";
import { getServerResponse2 } from "../../modules/getServerRespone/getServerResponse2.js";
import { parseResponse } from "../../../Archives/parseResponse.js";

export function handlePhone(event) {
  event.preventDefault();
  // const phoneForm = event.target;
  // const phoneInput = phoneForm[0];
  // const phoneValue = phoneInput.value;
  output(` <br>Your info is being processed. . .<br>`);
  const promise = new Promise(getServerResponse2);
  promise.then(parseResponse);
}
