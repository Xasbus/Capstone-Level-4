import { Account } from "./DataType/Account";
import { readAccount } from "./readAccount";

describe("readAccount", () => {
  it("returns true value when given an existing account", async () => {
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
  it("returns undefined when given existing email, but empty password", async () => {
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
  it("returns nothing when given empty email even if password exists", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns nothing when given existing email but unmatching password", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "test@email.com",
      password: "wrongPassword",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns nothing when given email that doesn't exist", async () => {
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
