import { Account } from "./Account";
import { removeAccount } from "./removeAccount";

describe("delAccount", () => {
  it("remove account when given an existing account with matching email", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test2@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await removeAccount(removeUser);

    //ASSERT
    expect(result).toBe(200);
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
  it("returns false when given unmatching email or password", async () => {
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
  it("returns nothing when given email that doesn't exist", async () => {
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
