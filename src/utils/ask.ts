export function ask(message: string) {
  const userText = prompt(message);
  const userNumber = Number(userText);
  const isNotNumber = isNaN(userNumber);
  if (isNotNumber) {
    return userText;
  } else {
    return userNumber;
  }
}
