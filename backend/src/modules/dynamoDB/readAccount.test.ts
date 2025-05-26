import { Account } from "../Types/Account";
import { readAccount } from "./readAccount";

describe("readAccount", () => {
  it.skip("returns true value when given an existing account", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "test@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result.email).toBe(readUser.email);
  });
  it.skip("returns value when given matching email and password", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "test@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeDefined();
  });
  it.skip("returns false when given emapty email", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "",
      password: "test1",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given empty password don't match", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "test@email.com",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given email that doesn't exist", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "nothing@email.com",
      password: "nothing",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
});
