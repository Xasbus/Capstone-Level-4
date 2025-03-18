export function getServerResponse3(resolve) {
  setTimeout(activateResolve, 5000);

  function activateResolve() {
    const response = {
      message: "Successfully received. See you there! ",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}
