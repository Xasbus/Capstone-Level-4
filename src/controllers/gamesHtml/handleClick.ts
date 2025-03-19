import { parseResp } from "../../modules/parseResp.js";

export function handleClick() {
  const promise = fetch(
    "https://opentdb.com/api.php?amount=3&category=15&type=multiple"
  );
  promise.then(parseResp);
}
