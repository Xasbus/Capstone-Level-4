import { viewResp } from "./viewResp.js";

export function parseResp(resolveValue: any) {
  const promise = resolveValue.text();
  promise.then(viewResp);
}
