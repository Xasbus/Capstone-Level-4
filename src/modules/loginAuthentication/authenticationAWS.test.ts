import { describe, expect, it } from "@jest/globals";
import { authenticationAWS } from "./authenticationAWS";

describe("The authenticationAWS function", () => {
  it("authenticates when email and password are correct", correctCrenentials);
  it("doesn't authenticates when email is not on list", unlistedEmail);
  it(
    "doesn't authenticates when email is correct, but password is empty",
    emptyPassword
  );
  it(
    "doesn't authenticate when email is wrong and password is correct",
    rightPassword
  );
  it(
    "doesn't authenticates when email and password are incorrect",
    noMatchingCredentials
  );
});

async function correctCrenentials() {
  // Arrange
  const email = "test@email.com";
  const password = "test";
  // ACT
  const isAuthenticated = await authenticationAWS(email, password);
  // ASSERT
  expect(isAuthenticated).toBe(true);
}

async function unlistedEmail() {
  // Arrange
  const email = "nothing@email.com";
  const password = "aaa";
  // ACT
  const isAuthenticated = await authenticationAWS(email, password);
  // ASSERT
  expect(isAuthenticated).toBe(false);
}

async function emptyPassword() {
  // Arrange
  const email = "test@email.com";
  const password = "";
  // ACT
  const isAuthenticated = await authenticationAWS(email, password);
  // ASSERT
  expect(isAuthenticated).toBe(false);
}

async function rightPassword() {
  // Arrange
  const email = "testtt@email.com";
  const password = "test";
  // ACT
  const isAuthenticated = await authenticationAWS(email, password);
  // ASSERT
  expect(isAuthenticated).toBe(false);
}

async function noMatchingCredentials() {
  // Arrange
  const email = "test@email.com";
  const password = "wrongPassword";
  // ACT
  const isAuthenticated = await authenticationAWS(email, password);
  // ASSERT
  expect(isAuthenticated).toBe(false);
}
