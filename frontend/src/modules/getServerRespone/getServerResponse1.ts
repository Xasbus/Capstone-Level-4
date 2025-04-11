export function getServerResponse1(resolve) {
  setTimeout(activateResolve, 4000);

  function activateResolve() {
    const response = {
      message: "Successfully received. Will get back to you ASAP. ",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}
