import { describe, expect, it } from "@jest/globals";
import { handleSignIn } from "./handleSignIn";

describe("The handleSignIn", () => {
  it(
    "sets errorMessage when both email and password are incorrect",
    wrongCredentials
  );
  it(
    "sets errorMessage when email is listed but password doesn't match",
    nonmatchingCrendentials
  );
  it(
    "sets errorMessage when email is incorrect and uses a password that is listed",
    rightPassword
  );
  it(
    "sets errorMessage when email is right, but password is empty.",
    emptyPassword
  );
  it("no errorMessage when email and password are correct", rightCrendentials);
});

async function wrongCredentials() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "aaa@aaa.com" }, { value: "aaa" }],
  };
  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}

async function nonmatchingCrendentials() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "test@email.com" }, { value: "aaa" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}
async function rightPassword() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "testt@email.com" }, { value: "test" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}
async function emptyPassword() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "testt@email.com" }, { value: "" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}

async function rightCrendentials() {
  //ARRANGE
  document.body.innerHTML = `<button id="cancelButton">Click</button>`;
  const form = ["zero", { value: "test@email.com" }, { value: "test" }];
  form.reset = () => {};
  const event = {
    preventDefault: () => {},
    target: form,
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("");
  // return empty string in handleSignIn
}
