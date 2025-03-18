import { viewResp } from "./viewResp.js";

export function parseResp(resolveValue) {
  const promise = resolveValue.text();
  promise.then(viewResp);
}
