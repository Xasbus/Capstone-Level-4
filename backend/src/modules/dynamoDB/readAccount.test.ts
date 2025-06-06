import { Account } from "./DataType/Account";
import { readAccount } from "./readAccount";

describe("readAccount", () => {
  it("returns account value when given an existing account with matching password", async () => {
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
    expect(result).toBe(true);
  });
  it("returns false when given existing email, but empty password", async () => {
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
    expect(result).toBe(false);
  });
  it("returns false when given empty email even if password exists", async () => {
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
    expect(result).toBe(false);
  });
  it("returns false info when given existing email but unmatching password", async () => {
    //ARRANGE
    const readUser: Account = {
      email: "test@email.com",
      password: "ReadPassword",
      name: "",
      phone: "",
    };

    //ACT
    const result = await readAccount(readUser);

    //ASSERT
    expect(result).toEqual(false);
  });
  it("returns Account object when given email that doesn't exist", async () => {
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
    expect(result).toEqual({
      email: readUser.email,
      password: readUser.password,
      name: readUser.name,
      phone: readUser.phone,
    });
  });
});
