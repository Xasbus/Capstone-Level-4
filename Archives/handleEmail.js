import { getServerResponse1 } from "../src/modules/getServerRespone/getServerResponse1.js";
import { parseResponse } from "../../modules/parseResponse.js";

export function handleEmail(event) {
  event.preventDefault();
  setOutputMessage(` <br>Submitting your concerns. . . `);
  const promise = new Promise(getServerResponse1);
  promise.then(parseResponse);
}
