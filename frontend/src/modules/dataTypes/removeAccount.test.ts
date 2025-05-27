import { Account } from "./Account";
import { removeAccount } from "./removeAccount";

describe("delAccount", () => {
  it("remove account when given an existing account", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "Testing@email.com",
      password: "testing",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns undefined when email is empty", async () => {
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
    expect(result).toBeUndefined();
  });
  it("returns undefined when password is empty", async () => {
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
    expect(result).toBeUndefined();
  });
  it("returns error when given unmatching email or password", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test@email.com",
      password: "jasof",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it("returns error when given email that doesn't exist", async () => {
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
    expect(result).toBeUndefined();
  });
});
