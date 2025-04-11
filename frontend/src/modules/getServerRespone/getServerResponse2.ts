export function getServerResponse2(resolve) {
  setTimeout(activateResolve, 5000);

  function activateResolve() {
    const response = {
      message: "Phone number recorded. Please choose time and date. . .  ",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}
