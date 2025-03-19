import { ask } from "../utils/ask";
import { output } from "../utils/output";

export function handleGame() {
  let message = "Guess my number.";
  for (let count = 0; count < 3; count++) {
    const winItem = ask(message);
    const userNumber = Number(winItem);
    const myNumber = 43;
    const doesMatch = userNumber === myNumber;
    if (doesMatch) {
      output("WINNER!!! Promo Code: <b>AG34FR<b><br/>");
    } else {
      output("You didn't guess right.<br/>");

      const isLess = userNumber < myNumber;

      if (isLess) {
        message += " Your number is less than mine. Guess again.";
      } else {
        message += " Your number is greater than mine. Guess again.";
      }
    }
  }
}
