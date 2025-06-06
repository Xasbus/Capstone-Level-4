import { Account } from "./Account";
import { removeAccount } from "./removeAccount";

describe("delAccount", () => {
  it("remove account when given an existing account with matching email", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "deltest@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(true);
  });
  it("returns false when given existing email and unmatching password", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test@email.com",
      password: "wrongPassword",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns false when email is empty", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns false when password is empty", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test@email",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });

  it("returns true when given email that doesn't exist", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "nothing@email.com",
      password: "nothing",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(true);
  });
});
